import Image from 'next/image';
import clsx from 'clsx/lite';

type TweetUserIconProps = {
  profile_image_slug: string;
  classes?: string;
};

export const TweetUserIcon = ({
  profile_image_slug,
  classes,
}: TweetUserIconProps) => {
  return (
    <div className={clsx('h-auto', classes)}>
      <Image
        src={profile_image_slug}
        width={40}
        height={40}
        alt="Picture of the author"
        className="rounded-full w-10 h-10 min-w-10"
      />
    </div>
  );
};
