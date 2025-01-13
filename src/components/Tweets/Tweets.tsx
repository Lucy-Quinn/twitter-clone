'use client';
import { TweetData } from '@/types/tweet';
import { fetchAllTweets } from '@/utils/fetch-requests';
import React, { useEffect, useState } from 'react';
import { Tweet } from '../Tweet';

export const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const tweets = await fetchAllTweets();
        setTweets(tweets);
      } catch (error) {
        console.error('Error fetching tweets:', error);
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading tweets...</div>;
  }

  if (error) {
    return <div>Error loading tweets</div>;
  }

  if (!tweets || tweets.length === 0) {
    return <div>No posts to display</div>;
  }

  return (
    <div className="flex flex-col">
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
};
