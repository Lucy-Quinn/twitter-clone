'use client';
import { TweetUserIcon } from '@/components/Tweet/TweetUserIcon';
import { useEffect, useState } from 'react';
import { Tweet } from '@/components/Tweet';
import { ReplyModalHeader } from './ReplyModalHeader';

export const ReplyModal = () => {
  const [data, setData] = useState(null);
  const { name, username, img_slug, content, created } = data ?? {
    name: '',
    username: '',
    img_slug: '',
    content: '',
    created: '',
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const responseData = await fetch('http://localhost:3500/posts', {
          cache: 'no-store',
        });
        const data = await responseData.json();

        setData(data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    data && (
      <>
        <div className="top-0 fixed bottom-0 right-0 opacity-40" />

        <div className="max-h-[90vh] rounded-2xl px-4 pb-2 md:min-w-[600px] md:max-w-[80vh]">
          <ReplyModalHeader />
          <div className="flex flex-col pt-4">
            {/* the message the user is replying to */}
            <Tweet
              key={username}
              {...{ img_slug, name, username, created, content }}
              isReply={true}
            />
            {/* the message that the user is replying with */}
            <div className="flex">
              <TweetUserIcon img_slug="/icons/user.jpg" classes="mt-3 mr-2" />
              <p className="mt-3 text-xl leading-6">
                Coding 10+ hours daily? It's all about passion, caffeine, and a
                comfy chair! Take breaks, stay curious, and remember: debugging
                is 90% of the job. Keep coding and enjoy the ride!
              </p>
            </div>
          </div>
        </div>
      </>
    )
  );
};
