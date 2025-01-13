import { useState, useEffect } from 'react';
import { ScheduledPost } from './ScheduledPost/ScheduledPost';
import { fetchScheduledPosts } from '@/utils/fetch-requests';

type ScheduledPostsProps = {
  userId: string;
};
export const ScheduledPosts = ({ userId }: ScheduledPostsProps) => {
  const [scheduledPosts, setScheduledPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const scheduledPosts = await fetchScheduledPosts(userId ?? '');
      setScheduledPosts(scheduledPosts);
    };
    fetchData();
  }, [userId]);

  // let lastUpdatedDate = new Date()

  // const lastUpdatedDate = new Intl.DateTimeFormat(locale, {
  //   day: 'numeric',
  //   month: 'short',
  //   year: 'numeric',
  // }).format(new Date(lastChangesMadeDate))

  return (
    <>
      {scheduledPosts &&
        scheduledPosts.map(({ id, scheduled_time, username, content }) => {
          let lastUpdatedDate = new Date(scheduled_time);

          // const formattedDate = lastUpdatedDate.toLocaleDateString('en-US', {
          //   weekday: 'short',
          //   month: 'short',
          //   day: 'numeric',
          //   year: 'numeric',
          // });
          const formattedDate = new Intl.DateTimeFormat('en-GB', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Europe/London',
          }).format(lastUpdatedDate);

          return (
            <ScheduledPost
              {...{ content }}
              originalTweetUsername={username}
              scheduledDate={formattedDate}
              key={id}
            />
          );
        })}
    </>
  );
};
