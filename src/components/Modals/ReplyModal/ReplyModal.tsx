'use client';

import { TweetHeader } from '@/components/Tweet/TweetHeader';
import { TweetUserIcon } from '@/components/Tweet/TweetUserIcon';
import { useRouter } from 'next/navigation';

export const ReplyModal = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };
  return (
    <div>
      <div className="top-0 fixed bottom-0 right-0 opacity-40" />
      <div className="min-w-[600px] max-h-[90vh] max-w-[80vh] rounded-2xl">
        {/* the message the user is replying to */}
        <TweetUserIcon img_slug="/icons/user.jpg" />
        <div className="flex flex-col">
          <TweetHeader
            img_slug="/icons/user.jpg"
            name="LucyQ"
            username="Lucyqbcn"
            created="10h"
          />
          <p>
            For people that code 10+ hours daily, what’s your secret? Genuinely
            asking, as I wish to get to that level as well.
          </p>
          <p>Replying to LQ</p>
        </div>
        {/* the message that the user is replying with */}
        <div></div>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};
