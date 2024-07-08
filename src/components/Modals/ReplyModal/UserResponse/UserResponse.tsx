import { TweetUserIcon } from '@/components/Tweet/TweetUserIcon';
import { useState } from 'react';

type UserResponseProps = {
  handleReplyChange: (value: boolean) => void;
};

export const UserResponse = ({ handleReplyChange }: UserResponseProps) => {
  const [replyMessage, setreplyMessage] = useState('');

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    handleReplyChange(value.length === 0);
    setreplyMessage(value);
  };

  return (
    <div className="flex">
      <TweetUserIcon img_slug="/icons/user.jpg" classes="mt-3 mr-2" />
      <textarea
        className="mt-3 text-xl leading-6 outline-none resize-none pt-[7px] placeholder-fontBlack placeholder-opacity-75"
        value={replyMessage}
        onChange={handleOnChange}
        rows={5}
        cols={15}
        placeholder="Post your reply"
        autoCapitalize="sentences"
        autoComplete="on"
        autoCorrect="on"
        spellCheck="true"
        aria-label="Post text"
        resize-none
      />
    </div>
  );
};
