import Image from 'next/image';
import { TweetAction } from '../TweetActions/TweetAction';
import { TweetData } from 'types';

export type TweetHeaderProps = Pick<
  TweetData,
  'name' | 'username' | 'created'
> & { isModal?: boolean; isReply?: boolean };

export const TweetHeader = ({
  name,
  username,
  created,
  isModal = false,
}: TweetHeaderProps) => {
  return (
    <div className="flex items-center">
      <div className="flex justify-between w-full">
        <div className="flex gap-1">
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
          <div className="flex gap-1 text-fontGrey">
            <a href={`https://twitter.com/${username}`}>
              <div className="">{`@${username}`}</div>
            </a>
            <span>.</span>
            <div>{created}</div>
          </div>
        </div>
        {!isModal && <TweetAction name="more" />}
      </div>
    </div>
  );
};
