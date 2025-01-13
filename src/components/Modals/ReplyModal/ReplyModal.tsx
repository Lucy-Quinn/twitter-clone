'use client';
import { useEffect, useState } from 'react';
import { Tweet as OriginalTweet } from '@/components/Tweet';
import { ReplyModalHeader } from './ReplyModalHeader';
import { UserResponse } from './UserResponse';
import useDeviceType from '@/hooks/useDeviceType';
import { ReplyModalFooter } from './ReplyModalFooter';
//@ts-ignore
import { useRouter } from 'next/navigation';
import { type TweetData } from '@/types/tweet';
import { fetchTweetById, submitMessage } from '@/utils/fetch-requests';
import { DialogWrapper } from '@/components/DialogWrapper';

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
  const [isReplyButtonDisabled, setIsReplyButtonDisabled] = useState(true);
  const [postMessage, setPostMessage] = useState('');
  const router = useRouter();
  const deviceType = useDeviceType();
  const { name, username, profile_image_slug, content, created } =
    data ?? defaultData;

  useEffect(() => {
    const fetchData = async () => {
      const tweet = await fetchTweetById(tweetId ?? '');
      setData(tweet);
    };
    fetchData();
  }, [tweetId]);

  const handleMessageSubmit = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const buttonId = (event.target as HTMLButtonElement).id.toLowerCase();

    if (buttonId === 'unsent' && isReplyButtonDisabled) {
      router.push('drafts');
    } else if (buttonId === 'schedule') {
      router.push('schedule');
    } else {
      try {
        const isSuccess = await submitMessage(
          buttonId,
          tweetId ?? '',
          postMessage,
          3,
        );

        isSuccess && router.push(buttonId === 'reply' ? '/home' : 'drafts');
      } catch (error) {
        console.error('Error submitting reply:', error);
      }
    }
  };

  const handleReplyChange = (value: string) => {
    setPostMessage(value);
    setIsReplyButtonDisabled(value.length === 0);
  };

  return (
    <>
      {data && (
        <DialogWrapper>
          <div className="fixed max-w-[600px] bg-[#fff] h-full p-4 md:h-auto lg:m-8 md:rounded-2xl">
            <ReplyModalHeader
              onMessageSubmit={handleMessageSubmit}
              {...{ isReplyButtonDisabled, deviceType }}
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
              {...{ isReplyButtonDisabled, deviceType }}
            />
          </div>
        </DialogWrapper>
      )}
    </>
  );
};
