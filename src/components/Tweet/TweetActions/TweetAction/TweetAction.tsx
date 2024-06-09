import Image from 'next/image';
import cn from 'classnames';

type TweetActionProps = {
  count?: number;
  src: string;
  label: string;
  classes?: string;
  onClick?: () => void;
};

export const TweetAction = ({
  count,
  src,
  label,
  classes,
  onClick,
}: TweetActionProps) => {
  return (
    <div className={cn('group relative', classes)} onClick={onClick}>
      <p className="opacity-0 absolute group-hover:opacity-100 group-hover:p-1 group-hover:bg-[#5A5E61] group-hover:top-6 group-hover:-left-2 group-hover:rounded group-hover:text-primary">
        {label}
      </p>
      <Image
        src={src}
        alt={label}
        width={20}
        height={24}
        className="group-hover:bg-twitterBlue group-hover:opacity-15"
      />
      <p className="group-hover:text-twitterBlue">{count}</p>
    </div>
  );
};
