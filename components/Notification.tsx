import React from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid';

type Props = {
  error: boolean;
  message: string;
};

function MessageError({ error, message }: Props) {
  return (
    <div className="mt-6 flex flex-col items-center justify-center ">
      <div className="flex items-center justify-center">
        {error ? (
          <>
            <h1 className="text-sm font-semibold text-red-600">{message}</h1>
            <XCircleIcon className="mt-1 ml-1 h-5 w-5 text-red-600" />
          </>
        ) : (
          <>
            <h1 className="text-sm font-semibold">{message}</h1>
            <CheckCircleIcon className="mt-1.5 ml-1 h-4 w-4 text-green-600" />
          </>
        )}
      </div>
    </div>
  );
}

export default MessageError;
