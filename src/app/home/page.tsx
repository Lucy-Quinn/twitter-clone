import { Tweet } from '@/components/Tweet';
import { GET } from 'app/api';
import { type TweetData } from 'types';

export default async function Home() {
  const fetchAllTweets = async () => {
    try {
      const response = await GET();
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const tweets = await fetchAllTweets();

  if (!tweets.length) {
    return <h1>No posts to display</h1>;
  }

  return (
    <div className="flex flex-col items-center justify-center m-auto">
      {tweets.map(
        ({
          tweetId,
          img_slug,
          name,
          username,
          created,
          content,
          views,
        }: TweetData) => (
          <Tweet
            key={tweetId}
            {...{
              tweetId,
              img_slug,
              name,
              username,
              created,
              content,
              views,
            }}
          />
        ),
      )}
    </div>
  );
}
