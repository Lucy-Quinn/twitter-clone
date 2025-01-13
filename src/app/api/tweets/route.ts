import { dbQuery } from 'app/api/db';
import { NextRequest, NextResponse } from 'next/server';

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
    return NextResponse.json(tweets.rows);
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

    const { tweetMessage, userId } = data;
    const query = `
        INSERT INTO tweets (content, user_id)
        VALUES ($1, $2)
        RETURNING *;
      `;

    const response = await dbQuery(query, [tweetMessage, userId]);

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error creating tweet:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
