import clsx from 'clsx/lite';
import icons from '@/components/icons';
import { capitaliseFirstLetter } from '@/utils/capitalise-first-letter';

type TweetActionProps = {
  count?: number;
  name: string;
  classes?: string;
  onClick?: () => void;
  color?: string;
};

export const TweetAction = ({
  count,
  name,
  classes,
  onClick,
  color = 'twitterBlue',
}: TweetActionProps) => {
  const label = capitaliseFirstLetter(name);
  //@ts-ignore
  const IconComponent = icons[name];

  return (
    <div className={clsx('group relative', classes)}>
      <button className="flex items-center gap-1" onClick={onClick}>
        <div className="relative text-fontGrey">
          <div
            className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition duration-300 bg-${color} p-[17px] -top-[7px] -left-[7px]`}
          ></div>
          <IconComponent className={`w-5 h-5 group-hover:text-${color}`} />
        </div>
        <p className={`group-hover:text-${color} transition duration-300`}>
          {count}
        </p>
      </button>
      <p className="opacity-0 absolute group-hover:opacity-100 group-hover:p-1 group-hover:bg-[#5A5E61] group-hover:top-8 group-hover:-left-2 group-hover:rounded group-hover:text-fontWhite">
        {label}
      </p>
    </div>
  );
};
