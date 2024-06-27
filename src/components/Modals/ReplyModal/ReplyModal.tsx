'use client';
import { useEffect, useState } from 'react';
import { Tweet as OriginalTweet } from '@/components/Tweet';
import { ReplyModalHeader } from './ReplyModalHeader';
import { UserResponse } from './UserResponse';

export const ReplyModal = () => {
  const [data, setData] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const defaultData = {
    name: '',
    username: '',
    img_slug: '',
    content: '',
    created: '',
  };

  const { name, username, img_slug, content, created } = data ?? defaultData;

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

  const handleReplySubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    //TODO
    event.preventDefault();
  };

  const handleReplyChange = (isDisabled: boolean) => {
    setIsButtonDisabled(isDisabled);
  };

  return (
    data && (
      <>
        <div className="top-0 fixed bottom-0 right-0 opacity-40" />
        <div className="max-h-[90vh] rounded-2xl px-4 pb-2 md:min-w-[600px] md:max-w-[80vh]">
          <ReplyModalHeader
            onReply={handleReplySubmit}
            isButtonDisabled={isButtonDisabled}
          />
          <div className="flex flex-col pt-4">
            <OriginalTweet
              {...{ img_slug, name, username, created, content }}
              isReply={true}
            />
            <UserResponse handleReplyChange={handleReplyChange} />
          </div>
        </div>
      </>
    )
  );
};
