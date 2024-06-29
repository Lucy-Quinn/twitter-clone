'use client';

import { TweetAction } from './TweetAction';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TweetData } from 'types';

type TweetActionsProps = Pick<TweetData, 'views' | 'tweetId'>;

export const TweetActions = ({ tweetId, views }: TweetActionsProps) => {
  const [likes, setLikes] = useState(0);
  const [reposts, setReposts] = useState(0);
  const [replies, setReplies] = useState(0);
  const router = useRouter();

  const handleLike = () => setLikes(likes + 1);
  const handleRepost = () => setReposts(reposts + 1);
  const handleReply = () => {
    setReplies(replies + 1);
    router.push(`reply/${tweetId}`);
  };
  return (
    <div className="flex justify-between text-secondary mt-3 max-w-[600px] text-xs [&>div]:inline-flex [&>div]:gap-1 [&>div]:items-center">
      <TweetAction
        count={replies}
        name="reply"
        classes="grow"
        onClick={handleReply}
      />
      <TweetAction
        count={reposts}
        name="repost"
        classes="grow"
        onClick={handleRepost}
        color="twitterGreen"
      />
      <TweetAction
        count={likes}
        name="like"
        classes="grow"
        onClick={handleLike}
        color="twitterPink"
      />
      <TweetAction count={views} name="view" classes="grow" />
      <TweetAction name="bookmark" classes="mr-2" />
      <TweetAction name="share" />
    </div>
  );
};
