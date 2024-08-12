import { dbQuery } from 'app/api/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { tweetId: string } },
) {
  const { tweetId } = params;
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
        WHERE t.id = ${tweetId}
        ORDER BY t.created_at DESC;`;

    const foundTweet = await dbQuery(query);
    return NextResponse.json(foundTweet.rows);
  } catch (error) {
    console.error('Error fetching tweet by ID:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
