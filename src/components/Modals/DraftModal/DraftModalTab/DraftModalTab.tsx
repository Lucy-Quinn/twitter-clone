import clsx from 'clsx';
import { TabType } from '../DraftModal';
import { splitStringIntoWords } from '@/utils/split-string-into-words';

type DraftModalProps = {
  handleTab: (title: TabType) => void;
  isSelected: boolean;
  title: TabType;
};
export const DraftModalTab = ({
  handleTab,
  isSelected,
  title,
}: DraftModalProps) => {
  const handleTabSelection = () => {
    handleTab(title);
  };

  return (
    <div className="min-w-[56px]" onClick={handleTabSelection}>
      <p
        className={clsx('w-full', {
          'font-bold': isSelected,
          'font-medium text-fontGrey': !isSelected,
        })}
      >
        {splitStringIntoWords(title)}
      </p>
      <div className="h-1">
        {isSelected && <div className="bg-twitterBlue w-full rounded-sm h-1" />}
      </div>
    </div>
  );
};
