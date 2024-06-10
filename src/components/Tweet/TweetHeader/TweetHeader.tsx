import Image from 'next/image';
import { TweetProps } from '@/components/Tweet';
import { TweetAction } from '../TweetActions/TweetAction';

type TweetHeaderProps = Pick<
  TweetProps,
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
      <div className="h-auto mr-2">
        <Image
          src={img_slug}
          width={40}
          height={40}
          alt="Picture of the author"
          className="rounded-full w-10 h-10 min-w-10"
        />
      </div>
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
