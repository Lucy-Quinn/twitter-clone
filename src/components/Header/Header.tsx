'use client';
import { useClerk } from '@clerk/nextjs';
import Image from 'next/image';
import { ThreeDots } from '../icons';
import { useState } from 'react';
import clsx from 'clsx';

export const Header = () => {
  const { signOut, user } = useClerk();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    signOut({ redirectUrl: '/' });
  };

  return (
    <header className="flex flex-col justify-end h-full">
      <div className="flex justify-end">
        <div className="relative w-[42%] flex items-end">
          <button
            onClick={handleOpenMenu}
            className={clsx(
              'flex items-center justify-between p-3 rounded-full w-full',
              {
                'hover:bg-fontGrey/15': !isOpen,
              },
            )}
          >
            <div className="flex">
              <Image
                src={user?.imageUrl || ''}
                alt="logout"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col ml-3 text-left">
                <p className="font-bold">{user?.fullName}</p>
                <p className="text-fontGrey">@{user?.username}</p>
              </div>
            </div>
            <ThreeDots />
          </button>

          <div
            className={`${isOpen ? 'block' : 'hidden'} absolute bottom-14 -left-3 mb-4 py-3 flex flex-col rounded-2xl 
              shadow-[0_0_15px_rgba(101,119,134,0.2),_0_0_3px_1px_rgba(101,119,134,0.15)] min-w-[300px] [&>p]:font-bold`}
          >
            <div className="relative">
              <button className="hover:bg-fontGrey/5 py-3 px-4 font-bold text-left w-full">
                Add an existing account
              </button>
              <button
                className="hover:bg-fontGrey/5 py-3 px-4 font-bold text-left w-full"
                onClick={handleSignOut}
              >
                Log out @{user?.username}
              </button>
              <div
                className="w-0 h-0 absolute right-[50%] -bottom-[19px] 
                  border-l-[10px] border-l-[transparent]
                  border-t-[8px] border-t-[#FFFFFF]
                  border-r-[10px] border-r-[transparent]
                  drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
