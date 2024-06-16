'use client';

import { TweetHeader } from '@/components/Tweet/TweetHeader';
import { TweetUserIcon } from '@/components/Tweet/TweetUserIcon';
import { useRouter } from 'next/navigation';

export const ReplyModal = async () => {
  const router = useRouter();
  const response = await fetch('http://localhost:3500/posts', {
    cache: 'no-store',
  });
  const posts = await response.json();
  const { name, username, created } = posts[0];
  const handleClose = () => {
    router.back();
  };
  return (
    <div>
      <div className="top-0 fixed bottom-0 right-0 opacity-40" />

      <div className="max-h-[90vh] rounded-2xl px-4 pb-2 md:min-w-[600px] md:max-w-[80vh]">
        <div className="flex justify-between h-[53px]">
          <button onClick={handleClose}>X</button>
          <div className="flex gap-3 [&>*]:px-4 [&>*]:text-sm [&>*]:min-h-8">
            <button className="transparent-button">Drafts</button>
            <button className="button my-[10px]">Reply</button>
          </div>
        </div>
        <div className="flex flex-col pt-4">
          {/* the message the user is replying to */}
          <div className="flex">
            <div className="flex flex-col items-center mr-2">
              <TweetUserIcon img_slug="/icons/user.jpg" />
              <div className="bg-[#cfd9de] w-[2px] h-full mt-1" />
            </div>
            <div className="flex flex-col">
              <TweetHeader {...{ name, username, created }} isModal />
              <p>
                For people that code 10+ hours daily, what’s your secret?
                Genuinely asking, as I wish to get to that level as well.
              </p>
              <p className="mt-3 mb-4 text-secondary">
                Replying to{' '}
                <span className="text-twitterBlue">@{username}</span>
              </p>
            </div>
          </div>
          {/* the message that the user is replying with */}
          <div className="flex">
            <TweetUserIcon img_slug="/icons/user.jpg" classes="mt-3 mr-2" />
            <p className="mt-3 text-xl leading-6">
              Coding 10+ hours daily? It's all about passion, caffeine, and a
              comfy chair! Take breaks, stay curious, and remember: debugging is
              90% of the job. Keep coding and enjoy the ride!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
