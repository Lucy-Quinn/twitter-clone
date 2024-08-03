import { TweetData } from 'types';
import { TweetActions } from './TweetActions';
import { TweetHeader } from './TweetHeader';
import { TweetUserIcon } from './TweetUserIcon';
import clsx from 'clsx';

type TweetDataProps = TweetData & { isReply?: boolean };
export const Tweet = ({
  id,
  profile_image_slug,
  name,
  username,
  created,
  content,
  views,
  isReply = false,
}: TweetDataProps) => {
  return (
    <article
      className={clsx('w-full', {
        'p-4': !isReply,
      })}
    >
      <div className="flex">
        <div className="flex flex-col items-center mr-2">
          <TweetUserIcon {...{ profile_image_slug }} />
          {isReply && <div className="bg-[#cfd9de] w-[2px] h-full mt-1" />}
        </div>
        <div className="flex flex-col w-full mr-2">
          <TweetHeader
            {...{ profile_image_slug, name, username, created }}
            isModal={true}
          />
          <p className="mt-1">{content}</p>
          {isReply && (
            <p className="mt-3 mb-4 text-fontGrey">
              Replying to <span className="text-twitterBlue">@{username}</span>
            </p>
          )}
          {!isReply && <TweetActions {...{ id, views }} />}
        </div>
      </div>
    </article>
  );
};
