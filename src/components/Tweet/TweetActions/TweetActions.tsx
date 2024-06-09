'use client';

import { TweetAction } from './TweetAction';
import { TweetProps } from '../Tweet';
import { useState } from 'react';

type TweetActionsProps = Pick<TweetProps, 'views'>;

export const TweetActions = ({ views }: TweetActionsProps) => {
  const [likes, setLikes] = useState(0);
  const [reposts, setReposts] = useState(0);
  const [replies, setReplies] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handleRepost = () => setReposts(reposts + 1);
  const handleReply = () => setReplies(replies + 1);
  return (
    <div className="flex justify-between text-secondary mt-3 max-w-[600px] text-xs [&>div]:inline-flex [&>div]:gap-1 [&>div]:items-center">
      <TweetAction
        count={replies}
        src="/icons/reply.svg"
        label="Reply"
        classes="grow"
        onClick={handleReply}
      />
      <TweetAction
        count={reposts}
        src="/icons/repost.svg"
        label="Repost"
        classes="grow"
        onClick={handleRepost}
      />
      <TweetAction
        count={likes}
        src="/icons/like.svg"
        label="Like"
        classes="grow"
        onClick={handleLike}
      />
      <TweetAction
        count={views}
        src="/icons/view.svg"
        label="View"
        classes="grow"
      />
      <TweetAction src="/icons/bookmark.svg" label="Bookmark" classes="mr-2" />
      <TweetAction src="/icons/share.svg" label="Share" />
    </div>
  );
};
