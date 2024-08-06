import { dbQuery } from '../../../../../data/db';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { tweetMessage, userId, tweetId } = data;
    const query = `
      INSERT INTO unsent_posts (content, tweet_id, user_id, updated_at)
      VALUES ('${tweetMessage}', ${tweetId}, ${userId}, CURRENT_TIMESTAMP)
      RETURNING *;
    `;

    const response = await dbQuery(query);
    return Response.json(response);
  } catch (error) {
    console.error('Error creating draft reply:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
