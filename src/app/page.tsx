import { Tweet } from '@/components/Tweet';
import { type TweetData } from 'types';

export default async function Home() {
  const response = await fetch('http://localhost:3500/posts', {
    cache: 'no-store',
  });
  const posts = await response.json();

  if (!posts.length) {
    return <h1>No posts to display</h1>;
  }

  return (
    <>
      {posts.map(
        ({ img_slug, name, username, created, content, views }: TweetData) => (
          <Tweet
            key={username}
            {...{ img_slug, name, username, created, content, views }}
          />
        ),
      )}
    </>
  );
}
