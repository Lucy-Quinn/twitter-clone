'use client';
import { useEffect, useState } from 'react';
import { Tweet as OriginalTweet } from '@/components/Tweet';
import { ReplyModalHeader } from './ReplyModalHeader';
import { UserResponse } from './UserResponse';
import { GETTWEETBYID } from 'app/api';
import { TweetData } from 'types';
import useDeviceType from '@/hooks/useDeviceType';
import { ReplyModalFooter } from './ReplyModalFooter';

type ReplyModalProps = Pick<TweetData, 'tweetId'>;

const defaultData = {
  name: '',
  username: '',
  img_slug: '',
  content: '',
  created: '',
};

export const ReplyModal = ({ tweetId }: ReplyModalProps) => {
  const [data, setData] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const deviceType = useDeviceType();
  const { name, username, img_slug, content, created } = data ?? defaultData;

  useEffect(() => {
    async function fetchTweetById() {
      try {
        //@ts-ignore
        const responseData = await GETTWEETBYID({ tweetId });
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchTweetById();
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
        <dialog className="fixed left-0 top-0 w-full h-full bg-[black] bg-opacity-50 z-50 overflow-auto flex justify-center items-center max-w-[600px]">
          <div className="bg-[#fff] h-full p-3 lg:h-auto lg:m-8 lg:rounded-2xl">
            <ReplyModalHeader
              onReply={handleReplySubmit}
              isButtonDisabled={isButtonDisabled}
              deviceType={deviceType}
            />
            <div className="flex flex-col pt-4">
              <OriginalTweet
                {...{ img_slug, name, username, created, content }}
                isReply={true}
              />
              <UserResponse handleReplyChange={handleReplyChange} />
            </div>
            <ReplyModalFooter
              onReply={handleReplySubmit}
              isButtonDisabled={isButtonDisabled}
              deviceType={deviceType}
            />
          </div>
        </dialog>
        <div className="top-0 fixed bottom-0 right-0 left-0" />
      </>
    )
  );
};
