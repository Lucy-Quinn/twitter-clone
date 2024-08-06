'use client';
import { useEffect, useState } from 'react';
import { Tweet as OriginalTweet } from '@/components/Tweet';
import { ReplyModalHeader } from './ReplyModalHeader';
import { UserResponse } from './UserResponse';
import useDeviceType from '@/hooks/useDeviceType';
import { ReplyModalFooter } from './ReplyModalFooter';
//@ts-ignore
import { useRouter, usePathname } from 'next/navigation';
import { type TweetData } from '@/types/tweet';

type ReplyModalProps = Pick<TweetData, 'id'>;

const defaultData = {
  name: '',
  username: '',
  profile_image_slug: '',
  content: '',
  created: '',
};

export const ReplyModal = ({ id: tweetId }: ReplyModalProps) => {
  const [data, setData] = useState<TweetData | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [replyMessage, setReplyMessage] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const deviceType = useDeviceType();
  const { name, username, profile_image_slug, content, created } =
    data ?? defaultData;

  useEffect(() => {
    const fetchTweetById = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tweets/${tweetId}`,
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
  }, [tweetId]);

  const handleMessageSubmit = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    //@ts-ignore
    const typeOfButton = event.target.innerText.toLowerCase();
    try {
      const response = await fetch(
        typeOfButton === 'reply'
          ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tweets/${tweetId}/replies`
          : `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/drafts/unsent`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tweetMessage: replyMessage,
            userId: 3,
            ...(typeOfButton === 'drafts' && { tweetId }),
          }),
        },
      );

      if (!response.ok) {
        throw new Error(`Failed to submit ${typeOfButton}`);
      }
      router.push(typeOfButton === 'reply' ? '/home' : 'drafts');
    } catch (error) {
      console.error('Error submitting reply:', error);
    }
  };

  const handleReplyChange = (value: string) => {
    setReplyMessage(value);
    setIsButtonDisabled(value.length === 0);
  };

  return (
    <>
      {pathname === `/reply/${tweetId}` && data && (
        <dialog className="left-0 top-0 w-full h-full bg-[black] bg-opacity-40 z-50 overflow-auto flex justify-center items-center">
          <div className="fixed max-w-[600px] bg-[#fff] h-full p-4 md:h-auto lg:m-8 md:rounded-2xl">
            <ReplyModalHeader
              onMessageSubmit={handleMessageSubmit}
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
              onMessageSubmit={handleMessageSubmit}
              {...{ isButtonDisabled, deviceType }}
            />
          </div>
        </dialog>
      )}
    </>
  );
};
