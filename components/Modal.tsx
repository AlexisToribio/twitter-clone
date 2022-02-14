import React from 'react';
import IconTwitter from '../components/IconTwitter';
import { XIcon } from '@heroicons/react/solid';

type Props = {
  children: React.ReactNode;
  setToggleShow: React.Dispatch<React.SetStateAction<boolean>>;
};

function Modal({ children, setToggleShow }: Props) {
  return (
    <>
      <div className="absolute left-0 top-0 flex h-full w-screen items-center justify-center bg-slate-200/80">
        <div className="relative flex w-3/4 max-w-screen-md flex-col items-center rounded-xl bg-white">
          <button
            onClick={() => setToggleShow(false)}
            className="absolute right-12 top-6 p-1 duration-300 hover:rounded-full hover:bg-gray-300"
          >
            <XIcon className="h-8 w-8" />
          </button>
          <header className="m-6 flex items-center justify-center">
            <IconTwitter className="h-auto w-12 text-twitter-blue-normal" />
          </header>
          <main className="items-left flex w-full flex-col px-4 pb-7">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}

export default Modal;
