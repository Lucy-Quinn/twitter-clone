'use client';

import clsx from 'clsx/lite';
import icons from '@/components/icons';
import useDeviceType, { DeviceType } from '@/hooks/useDeviceType';

type IconName = keyof typeof icons;

type TweetActionProps = {
  count?: number;
  name: IconName;
  classes?: {
    container?: string;
    icon?: string;
    tooltip?: string;
  };
  onClick?: () => void;
  color?: string;
  showTooltip?: boolean;
};

export const TweetAction = ({
  count,
  name,
  classes: { container, icon, tooltip } = {},
  onClick,
  color = 'twitterBlue',
  showTooltip = true,
}: TweetActionProps) => {
  const IconComponent = icons[name];
  const deviceType = useDeviceType();

  return (
    <div className={clsx('group relative text-xs', container)}>
      <button className="flex items-center gap-1" onClick={onClick}>
        <div className="relative text-fontGrey">
          <div
            className={clsx(
              `absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition duration-300 bg-${color} p-[17px] -top-[7px] -left-[7px]`,
              icon,
            )}
          ></div>
          <IconComponent className={`w-5 h-5 group-hover:text-${color}`} />
        </div>
        {count && (
          <p className={`group-hover:text-${color} transition duration-300`}>
            {count}
          </p>
        )}
      </button>
      {deviceType === DeviceType.desktop && showTooltip && (
        <p
          className={clsx(
            'hidden absolute group-hover:block group-hover:p-[3px] group-hover:bg-[#5A5E61] group-hover:top-7 group-hover:-left-2 group-hover:rounded group-hover:text-fontWhite',
            tooltip,
          )}
        >
          {name}
        </p>
      )}
    </div>
  );
};
