import { Tweet } from '@/components/Tweet';
import { Tweets } from '@/components/Tweets';
import { type TweetData } from '@/types/tweet';
import { fetchAllTweets } from '@/utils/fetch-requests';
import { useEffect, useState } from 'react';

export default async function Home() {
  // const fetchAllTweets = async () => {
  //   try {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tweets`,
  //     );
  //     console.log('🚀 ~ fetchAllTweets ~ response:', response);

  //     if (!response.ok) {
  //       throw new Error('Failed to fetch tweets');
  //     }
  //     return await response.json();
  //   } catch (error) {
  //     console.error('Error fetching all tweets:', error);
  //     return [];
  //   }
  // };

  // const tweets = await fetchAllTweets();

  return <Tweets />;
}
