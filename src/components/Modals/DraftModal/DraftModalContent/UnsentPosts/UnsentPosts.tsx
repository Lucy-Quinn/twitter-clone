import React, { useEffect, useState } from 'react';
import { UnsentPost } from '../UnsentPost/UnsentPost';
import { fetchUnsentPosts } from '@/utils/fetch-requests';

type UnsentPostsProps = {
  userId: string;
};
export const UnsentPosts = ({ userId }: UnsentPostsProps) => {
  const [unsentPosts, setUnsentPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const unsentPosts = await fetchUnsentPosts(userId ?? '');
      setUnsentPosts(unsentPosts);
    };
    fetchData();
  }, [userId]);

  return (
    <>
      {unsentPosts &&
        unsentPosts.map(({ id, username, content }) => {
          return (
            <UnsentPost
              {...{ content }}
              originalTweetUsername={username}
              key={id}
            />
          );
        })}
    </>
  );
};
