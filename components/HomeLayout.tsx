import React, { useState } from 'react';
import Link from 'next/link';
import IconTwitter from './IconTwitter';
import IconButton from './IconButton';
import Button from './Button';
import Modal from './Modal';
import WriteTweet from './WriteTweet';
import { PencilIcon, LogoutIcon } from '@heroicons/react/outline';
import { IconsTweet } from '../data/IconsTweet';
import { Tweet } from '../types';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
  setData: React.Dispatch<React.SetStateAction<Tweet[]>>;
};

function HomeLayout({ children, setData }: Props) {
  const [toggleShow, setToggleShow] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    window.localStorage.removeItem('auth-token');
    router.push('/');
  };
  return (
    <div className="flex h-screen w-full">
      <nav className="ml-24 mr-4 flex h-full flex-col items-center border-r-2 pt-5 pr-12 xl:w-44 xl:items-start xl:pr-0">
        <Link href="/home">
          <a>
            <IconTwitter className="mb-8 h-8 w-8 text-twitter-blue-normal" />
          </a>
        </Link>
        {IconsTweet.map(({ route, Icon, title }, index) => (
          <IconButton route={route} Icon={Icon} key={index} title={title} />
        ))}
        <Button
          type="button"
          style="tertiary"
          auxClass="noUse"
          handleClick={() => setToggleShow(!toggleShow)}
        >
          <PencilIcon className="h-7 w-7 text-white" />
        </Button>
        <div className="mt-60">
          <Button
            type="button"
            style="tertiary"
            auxClass="noUse"
            handleClick={handleLogout}
          >
            <LogoutIcon className="h-7 w-7 text-white" />
          </Button>
        </div>
        {toggleShow && (
          <Modal setToggleShow={setToggleShow} usePath={false}>
            <WriteTweet setData={setData} setToggleShow={setToggleShow} />
          </Modal>
        )}
      </nav>
      <div className="w-3/5">{children}</div>
    </div>
  );
}

export default HomeLayout;
