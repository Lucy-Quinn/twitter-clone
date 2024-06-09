import { TweetActions } from './TweetActions';
import { TweetHeader } from './TweetHeader';
export type TweetProps = {
  img_slug: string;
  name: string;
  username: string;
  created: string;
  content: string;
  views: number;
};

export const Tweet = ({
  img_slug,
  name,
  username,
  created,
  content,
  views,
}: TweetProps) => {
  return (
    <article className="p-4 max-w-[598px]">
      <div className="flex flex-col">
        <TweetHeader
          img_slug={img_slug}
          name={name}
          username={username}
          created={created}
        />
        <div>{content}</div>
        <TweetActions views={views} />
      </div>
    </article>
  );
};
