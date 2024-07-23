import { UnsentPostData, TweetData } from 'types';

export async function GETALLTWEETS() {
  try {
    const responseData = await fetch('http://localhost:3500/tweets', {
      cache: 'no-store',
    });
    const tweets = await responseData.json();

    return tweets;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch all tweets');
  }
}

export async function GETTWEETBYID({ tweetId }: { tweetId: string }) {
  try {
    const responseData = await fetch('http://localhost:3500/tweets', {
      cache: 'no-store',
    });
    const tweets = await responseData.json();
    const foundTweet = tweets.find((tweet: TweetData) => {
      return tweet.tweetId === Number(tweetId);
    });
    return foundTweet;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error(`Failed to fetch tweets by id: ${tweetId}`);
  }
}

export async function GETALLUNSENTPOSTSBYUSERID({
  userId,
}: {
  userId: string;
}) {
  try {
    const responseData = await fetch('http://localhost:3500/unsentPosts', {
      cache: 'no-store',
    });
    const unsentPosts = await responseData.json();

    const foundUnsentPosts = unsentPosts.filter(
      (unsentPost: UnsentPostData) => {
        return unsentPost.authorId === Number(userId);
      },
    );

    return foundUnsentPosts;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch unsent posts');
  }
}

export async function GETALLSCHEDULEDPOSTSBYUSERID({
  userId,
}: {
  userId: string;
}) {
  try {
    const responseData = await fetch('http://localhost:3500/scheduledPosts', {
      cache: 'no-store',
    });
    const scheduledPosts = await responseData.json();

    const foundScheduledPosts = scheduledPosts.filter(
      (scheduledPost: UnsentPostData) => {
        return scheduledPost.authorId === Number(userId);
      },
    );

    return foundScheduledPosts;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch scheduled posts');
  }
}
