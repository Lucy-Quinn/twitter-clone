import { GETALLSCHEDULEDPOSTSBYUSERID } from 'app/api';
import { useState, useEffect } from 'react';
import { ScheduledPost } from './ScheduledPost/ScheduledPost';

type ScheduledPostsProps = {
  userId: string;
};
export const ScheduledPosts = ({ userId }: ScheduledPostsProps) => {
  const [scheduledPosts, setScheduledPosts] = useState([]);

  useEffect(() => {
    async function fetchAllScheduledPosts() {
      try {
        const responseData = await GETALLSCHEDULEDPOSTSBYUSERID({ userId });
        setScheduledPosts(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchAllScheduledPosts();
  }, []);

  return (
    <>
      {scheduledPosts &&
        scheduledPosts.map(
          ({
            scheduledPostId,
            scheduledDate,
            originalTweetUsername,
            content,
          }) => {
            return (
              <ScheduledPost
                {...{ scheduledDate, originalTweetUsername, content }}
                key={scheduledPostId}
              />
            );
          },
        )}
    </>
  );
};
