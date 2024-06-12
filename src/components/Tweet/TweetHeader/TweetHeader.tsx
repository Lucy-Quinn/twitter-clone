import Image from 'next/image';
import { TweetAction } from '../TweetActions/TweetAction';
import { TweetData } from 'types';

export type TweetHeaderProps = Pick<
  TweetData,
  'img_slug' | 'name' | 'username' | 'created'
>;

export const TweetHeader = ({
  img_slug,
  name,
  username,
  created,
}: TweetHeaderProps) => {
  return (
    <div className="flex items-center">
      <div className="flex justify-between w-full">
        <div className="flex gap-2">
          <a href={`https://twitter.com/${username}`}>
            <div className="flex gap-1 items-center">
              <h3 className="font-bold">{name}</h3>
              <Image
                src="/icons/verified.webp"
                width={20}
                height={20}
                alt="Verified"
              />
            </div>
          </a>
          <div className="flex gap-1 text-secondary">
            <a href={`https://twitter.com/${username}`}>
              <div className="">{`@${username}`}</div>
            </a>
            <div>.</div>
            <div>{created}</div>
          </div>
        </div>
        <TweetAction name="more" />
      </div>
    </div>
  );
};
