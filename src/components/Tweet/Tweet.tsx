import { TweetData } from 'types';
import { TweetActions } from './TweetActions';
import { TweetHeader } from './TweetHeader';
import { TweetUserIcon } from './TweetUserIcon';

export const Tweet = ({
  img_slug,
  name,
  username,
  created,
  content,
  views,
}: TweetData) => {
  return (
    <article className="p-4 max-w-[598px]">
      <div className="flex">
        <TweetUserIcon {...{ img_slug }} />
        <div className="flex flex-col w-full">
          <TweetHeader {...{ img_slug, name, username, created }} />
          <p>{content}</p>
          <TweetActions {...{ views }} />
        </div>
      </div>
    </article>
  );
};
