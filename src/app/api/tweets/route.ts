import { TweetData } from 'types';

export async function GETALLTWEETS() {
  try {
    const responseData = await fetch('http://localhost:3500/posts', {
      cache: 'no-store',
    });
    const tweets = await responseData.json();
    return tweets;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch tweets');
  }
}

export async function GETTWEETBYID({ tweetId }: { tweetId: string }) {
  try {
    const responseData = await fetch('http://localhost:3500/posts', {
      cache: 'no-store',
    });
    const tweets = await responseData.json();
    const foundTweet = tweets.find((tweet: TweetData) => {
      return tweet.tweetId === Number(tweetId);
    });
    return foundTweet;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch tweets');
  }
}
