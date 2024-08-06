import { dbQuery } from 'app/api/db';

export async function GET() {
  try {
    const query = `SELECT 
        t.id, 
        t.content, 
        t.created_at, 
        u.name,
        u.username, 
        u.profile_image_slug
      FROM tweets t
      JOIN users u ON t.user_id = u.id
      ORDER BY t.created_at DESC`;

    const tweets = await dbQuery(query);
    return Response.json(tweets.rows);
  } catch (error) {
    console.error('Error fetching all tweets:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { tweetMessage, userId } = data;
    const query = `
        INSERT INTO tweets (content, user_id)
        VALUES ('${tweetMessage}', ${userId})
        RETURNING *;
      `;

    const response = await dbQuery(query);
    return Response.json(response);
  } catch (error) {
    console.error('Error creating tweet:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
