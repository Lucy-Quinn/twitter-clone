import clsx from 'clsx';
import { splitStringIntoWords } from '@/utils/split-string-into-words';
import { DraftType } from '@/types/tweet';

type DraftModalTabProps = {
  handleTab: (title: DraftType) => void;
  isSelected: boolean;
  title: DraftType;
};
export const DraftModalTab = ({
  handleTab,
  isSelected,
  title,
}: DraftModalTabProps) => {
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
        {splitStringIntoWords(title.toLowerCase())}
      </p>
      <div className="h-1">
        {isSelected && <div className="bg-twitterBlue w-full rounded-sm h-1" />}
      </div>
    </div>
  );
};
