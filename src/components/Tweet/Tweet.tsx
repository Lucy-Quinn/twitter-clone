import { TweetData } from 'types';
import { TweetActions } from './TweetActions';
import { TweetHeader } from './TweetHeader';
import { TweetUserIcon } from './TweetUserIcon';
import clsx from 'clsx';

type TweetDataProps = TweetData & { isReply?: boolean };
export const Tweet = ({
  img_slug,
  name,
  username,
  created,
  content,
  views,
  isReply = false,
}: TweetDataProps) => {
  return (
    <article
      className={clsx('max-w-[598px]', {
        'p-4': !isReply,
      })}
    >
      <div className="flex">
        <div className="flex flex-col items-center mr-2">
          <TweetUserIcon {...{ img_slug }} classes="" />
          {isReply && <div className="bg-[#cfd9de] w-[2px] h-full mt-1" />}
        </div>
        <div className="flex flex-col w-full mr-2">
          <TweetHeader {...{ img_slug, name, username, created }} />
          <p className="mt-1">{content}</p>
          {isReply && (
            <p className="mt-3 mb-4 text-secondary">
              Replying to <span className="text-twitterBlue">@{username}</span>
            </p>
          )}
          {!isReply && <TweetActions {...{ views }} />}
        </div>
      </div>
    </article>
  );
};
