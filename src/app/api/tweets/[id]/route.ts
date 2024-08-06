import { dbQuery } from '../../../../../data/db';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
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
        WHERE t.id = ${id}
        ORDER BY t.created_at DESC;`;

    const foundTweet = await dbQuery(query);
    return Response.json(foundTweet.rows);
  } catch (error) {
    console.error('Error fetching tweets:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
