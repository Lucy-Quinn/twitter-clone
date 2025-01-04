'use client';
import { TweetData } from '@/types/tweet';
import { fetchAllTweets } from '@/utils/fetch-requests';
import React, { useEffect, useState } from 'react';
import { Tweet } from '../Tweet/Tweet';

export const Tweets = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tweets = await fetchAllTweets();
      console.log('🚀 ~ fetchData ~ tweets:', tweets);
      setTweets(tweets);
    };
    fetchData();
  }, []);

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
};
