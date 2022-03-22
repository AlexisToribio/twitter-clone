import React from 'react';
import Link from 'next/link';

type Props = {
  route: string;
  Icon: JSX.Element;
  title: string;
};

function IconButton({ Icon, route, title }: Props) {
  return (
    <div className="flex">
      <Link href={route}>
        <a className="mb-4 flex rounded-full p-2 duration-200 hover:bg-slate-300">
          {Icon}{' '}
          <p className="hidden xl:ml-2 xl:inline-block xl:text-xl">{title}</p>
        </a>
      </Link>
    </div>
  );
}

export default IconButton;
