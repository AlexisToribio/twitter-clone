import React from 'react';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  href: string;
  type: 'primary' | 'secondary';
};

function Button({ children, href, type }: Props) {
  const commonClass =
    'mt-5 w-80 rounded-full py-2 text-center font-semibold md:text-xl';
  let varClass = '';
  switch (type) {
    case 'primary':
      varClass =
        'bg-twitter-blue-normal  text-white duration-300 hover:bg-twitter-blue-medium lg:mt-12';
      break;
    case 'secondary':
      varClass =
        'mb-10 border border-twitter-blue-normal bg-white text-twitter-blue-normal duration-300 hover:bg-twitter-blue-light';
      break;
  }
  return (
    <Link href={href}>
      <a className={`${commonClass} ${varClass}`}>{children}</a>
    </Link>
  );
}

export default Button;
