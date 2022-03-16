import React, { useState } from 'react';
import Link from 'next/link';
import {
  HomeIcon,
  SearchIcon,
  BellIcon,
  MailIcon,
  DocumentTextIcon,
  BookmarkIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  PencilIcon,
} from '@heroicons/react/outline';
import IconTwitter from '../components/IconTwitter';
import IconButton from '../components/IconButton';
import Button from '../components/Button';
import Modal from '../components/Modal';
import Tweet from '../components/Tweet';

type Props = {
  children: React.ReactNode;
};

const arrayObjects = [
  {
    route: '/home',
    title: 'Home',
    Icon: <HomeIcon className="h-7 w-7" />,
    key: 1,
  },
  {
    route: '/home',
    title: 'Explore',
    Icon: <SearchIcon className="h-7 w-7" />,
    key: 2,
  },
  {
    route: '/home',
    title: 'Notifications',
    Icon: <BellIcon className="h-7 w-7" />,
    key: 3,
  },
  {
    route: '/home',
    title: 'Messages',
    Icon: <MailIcon className="h-7 w-7" />,
    key: 4,
  },
  {
    route: '/home',
    title: 'Bookmarks',
    Icon: <DocumentTextIcon className="h-7 w-7" />,
    key: 5,
  },
  {
    route: '/home',
    title: 'Lists',
    Icon: <BookmarkIcon className="h-7 w-7" />,
    key: 6,
  },
  {
    route: '/home',
    title: 'Profile',
    Icon: <UserIcon className="h-7 w-7" />,
    key: 7,
  },
  {
    route: '/home',
    title: 'More',
    Icon: <DotsCircleHorizontalIcon className="h-7 w-7" />,
    key: 8,
  },
];

function Layout({ children }: Props) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <div className="flex h-screen w-full">
      <nav className="ml-24 mr-4 flex h-full flex-col items-center border-r-2 pt-5 pr-12 xl:w-44 xl:items-start xl:pr-0">
        <Link href="/home">
          <a>
            <IconTwitter className="mb-8 h-8 w-8 text-twitter-blue-normal" />
          </a>
        </Link>
        {arrayObjects.map(({ route, Icon, key, title }) => (
          <IconButton route={route} Icon={Icon} key={key} title={title} />
        ))}
        <Button
          type="button"
          style="tertiary"
          auxClass="noUse"
          handleClick={() => setToggleShow(!toggleShow)}
        >
          <PencilIcon className="h-7 w-7 text-white" />
        </Button>
        {toggleShow && (
          <Modal setToggleShow={setToggleShow}>
            <Tweet />
          </Modal>
        )}
      </nav>
      <div className="w-3/5">{children}</div>
    </div>
  );
}

export default Layout;
