import { Tweet } from '@/components/Tweet';
import { type TweetData } from 'types';

export default async function Home() {
  const response = await fetch('http://localhost:3500/tweets', {
    cache: 'no-store',
  });
  const posts = await response.json();

  if (!posts.length) {
    return <h1>No posts to display</h1>;
  }

  return (
    <div className="flex flex-col items-center justify-center m-auto">
      {posts.map(
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
