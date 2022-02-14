import React from 'react';
import { ExclamationIcon } from '@heroicons/react/solid';

type Props = {
  children: React.ReactNode;
};

function Error({ children }: Props) {
  return (
    <span className="mt-1 flex w-10/12 text-left text-sm font-semibold text-red-600">
      <ExclamationIcon className="mt-0.5 mr-1 h-4 w-4" />
      {children}
    </span>
  );
}

export default Error;
