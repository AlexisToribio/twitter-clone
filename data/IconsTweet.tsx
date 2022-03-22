import {
  HomeIcon,
  SearchIcon,
  BellIcon,
  MailIcon,
  DocumentTextIcon,
  BookmarkIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from '@heroicons/react/outline';

export const IconsTweet = [
  {
    route: '/home',
    title: 'Home',
    Icon: <HomeIcon className="h-7 w-7" />,
  },
  {
    route: '/home',
    title: 'Explore',
    Icon: <SearchIcon className="h-7 w-7" />,
  },
  {
    route: '/home',
    title: 'Notifications',
    Icon: <BellIcon className="h-7 w-7" />,
  },
  {
    route: '/home',
    title: 'Messages',
    Icon: <MailIcon className="h-7 w-7" />,
  },
  {
    route: '/home',
    title: 'Bookmarks',
    Icon: <DocumentTextIcon className="h-7 w-7" />,
  },
  {
    route: '/home',
    title: 'Lists',
    Icon: <BookmarkIcon className="h-7 w-7" />,
  },
  {
    route: '/home',
    title: 'Profile',
    Icon: <UserIcon className="h-7 w-7" />,
  },
  {
    route: '/home',
    title: 'More',
    Icon: <DotsCircleHorizontalIcon className="h-7 w-7" />,
  },
];
