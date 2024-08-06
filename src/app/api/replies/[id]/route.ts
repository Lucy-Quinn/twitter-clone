import { dbQuery } from '../../../../../data/db';

export async function POST(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const data = await request.json();
    const { id: tweetId } = params;

    const { tweetMessage, userId } = data;
    const query = `
        INSERT INTO replies (content, tweet_id, user_id)
        VALUES ('${tweetMessage}', ${tweetId}, ${userId})
        RETURNING *;
      `;

    const response = await dbQuery(query);
    return Response.json(response);
  } catch (error) {
    console.error('Error creating tweet reply:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
