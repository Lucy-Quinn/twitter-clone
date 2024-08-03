'use client';
import { useEffect, useState } from 'react';
import { Tweet as OriginalTweet } from '@/components/Tweet';
import { ReplyModalHeader } from './ReplyModalHeader';
import { UserResponse } from './UserResponse';
import { type TweetData } from 'types';
import useDeviceType from '@/hooks/useDeviceType';
import { ReplyModalFooter } from './ReplyModalFooter';

type ReplyModalProps = Pick<TweetData, 'id'>;

const defaultData = {
  name: '',
  username: '',
  profile_image_slug: '',
  content: '',
  created: '',
};

export const ReplyModal = ({ id }: ReplyModalProps) => {
  const [data, setData] = useState<TweetData | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const deviceType = useDeviceType();
  const { name, username, profile_image_slug, content, created } =
    data ?? defaultData;

  useEffect(() => {
    const fetchTweetById = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tweets/${id}`,
        );
        if (!response.ok) {
          throw new Error('Failed to fetch tweet by id');
        }
        const tweet = await response.json();
        setData(tweet[0]);
      } catch (error) {
        console.error('Error fetching tweet by id:', error);
        return [];
      }
    };
    fetchTweetById();
  }, [id]);

  const handleReplySubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    //TODO
    event.preventDefault();
  };

  const handleReplyChange = (isDisabled: boolean) => {
    setIsButtonDisabled(isDisabled);
  };

  return (
    <>
      {data && (
        <dialog className="left-0 top-0 w-full h-full bg-[black] bg-opacity-40 z-50 overflow-auto flex justify-center items-center">
          <div className="fixed max-w-[600px] bg-[#fff] h-full p-4 md:h-auto lg:m-8 md:rounded-2xl">
            <ReplyModalHeader
              onReply={handleReplySubmit}
              {...{ isButtonDisabled, deviceType }}
            />
            <div className="flex flex-col pt-4">
              <OriginalTweet
                {...{ profile_image_slug, name, username, created, content }}
                isReply={true}
              />
              <UserResponse handleReplyChange={handleReplyChange} />
            </div>
            <ReplyModalFooter
              onReply={handleReplySubmit}
              {...{ isButtonDisabled, deviceType }}
            />
          </div>
        </dialog>
      )}
    </>
  );
};
