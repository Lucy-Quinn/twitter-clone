import React, { useEffect, useState } from 'react';
import { UnsentPost } from '../UnsentPost/UnsentPost';

type UnsentPostsProps = {
  userId: string;
};
export const UnsentPosts = ({ userId }: UnsentPostsProps) => {
  const [unsentPosts, setUnsentPosts] = useState([]);

  // useEffect(() => {
  //   async function fetchAllUnsentPosts() {
  //     try {
  //       const responseData = await GETALLUNSENTPOSTSBYUSERID({ userId });
  //       setUnsentPosts(responseData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }
  //   fetchAllUnsentPosts();
  // }, []);

  return (
    <>
      {unsentPosts &&
        unsentPosts.map(({ unsentPostId, originalTweetUsername, content }) => {
          return (
            <UnsentPost
              {...{ originalTweetUsername, content }}
              key={unsentPostId}
            />
          );
        })}
    </>
  );
};
