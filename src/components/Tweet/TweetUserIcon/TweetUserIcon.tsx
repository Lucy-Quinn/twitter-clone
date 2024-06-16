import Image from 'next/image';
import clsx from 'clsx/lite';

type TweetUserIconProps = {
  img_slug: string;
  classes?: string;
};

export const TweetUserIcon = ({ img_slug, classes }: TweetUserIconProps) => {
  return (
    <div className={clsx('h-auto', classes)}>
      <Image
        src={img_slug}
        width={40}
        height={40}
        alt="Picture of the author"
        className="rounded-full w-10 h-10 min-w-10"
      />
    </div>
  );
};
