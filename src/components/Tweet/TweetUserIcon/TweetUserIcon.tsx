import Image from 'next/image';

type TweetUserIconProps = {
  img_slug: string;
};

export const TweetUserIcon = ({ img_slug }: TweetUserIconProps) => {
  return (
    <div className="h-auto mr-2">
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
