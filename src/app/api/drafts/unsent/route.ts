import { dbQuery } from 'app/api/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('userId');

  try {
    const query = `SELECT 
        u_p.id, 
        u_p.content, 
        u_p.updated_at, 
        u_p.created_at, 
        u.username
      FROM unsent_posts u_p
      JOIN users u ON u_p.user_id = u.id
        WHERE u.id = $1
      ORDER BY u_p.created_at DESC`;

    const unsentPosts = await dbQuery(query, [userId]);
    return NextResponse.json(unsentPosts.rows);
  } catch (error) {
    console.error('Error fetching all tweets:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { tweetMessage, userId, tweetId } = data;
    const query = `
      INSERT INTO unsent_posts (content, tweet_id, user_id, updated_at)
      VALUES ('${tweetMessage}', ${tweetId}, ${userId}, CURRENT_TIMESTAMP)
      RETURNING *;
    `;

    const response = await dbQuery(query);
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error creating draft reply:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
