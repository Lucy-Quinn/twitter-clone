import { dbQuery } from 'app/api/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('userId');

  try {
    const query = `SELECT 
        s_p.id, 
        s_p.content, 
        s_p.scheduled_time, 
        s_p.created_at, 
        u.username
      FROM scheduled_posts s_p
      JOIN users u ON s_p.user_id = u.id
      WHERE u.id = $1
      ORDER BY s_p.created_at DESC`;

    const unsentPosts = await dbQuery(query, [userId]);
    return NextResponse.json(unsentPosts.rows);
  } catch (error) {
    console.error('Error fetching all scheduled posts:', error);
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
      INSERT INTO scheduled_posts (content, tweet_id, user_id, scheduled_time)
      VALUES ('${tweetMessage}', ${tweetId}, ${userId}, CURRENT_TIMESTAMP)
      RETURNING *;
    `;

    const response = await dbQuery(query);
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error creating scheduled post:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
