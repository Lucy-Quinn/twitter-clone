import { Tweet } from '@/components/Tweet';
import { type TweetData } from 'types';

export default async function Home() {
  const fetchAllTweets = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tweets`,
      );
      if (!response.ok) {
        throw new Error('Failed to fetch tweets');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching all tweets:', error);
      return [];
    }
  };

  const tweets = await fetchAllTweets();

  if (!tweets || tweets.length === 0) {
    return <h1>No posts to display</h1>;
  }

  return (
    <div className="flex flex-col items-center justify-center m-auto">
      {tweets.map(
        ({
          id,
          profile_image_slug,
          name,
          username,
          created,
          content,
          views,
        }: TweetData) => (
          <Tweet
            key={id}
            {...{
              id,
              profile_image_slug,
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
