import React from 'react';
import IconTwitter from '../components/IconTwitter';

type Props = {
  children: React.ReactNode;
  toggleShow: boolean;
  setToggleShow: (toggleShow: boolean) => void;
};

function Modal({ children, toggleShow, setToggleShow }: Props) {
  return (
    <>
      {toggleShow && (
        <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-slate-200/80">
          <div className="relative flex w-3/4 max-w-screen-md flex-col items-center rounded-xl bg-white">
            <button
              onClick={() => setToggleShow(false)}
              className="absolute left-12 top-6 duration-300 hover:rounded-full hover:bg-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
            <header className="m-6 flex items-center justify-center">
              <IconTwitter className="h-auto w-12 text-twitter-blue-normal" />
            </header>
            <main className="items-left flex w-full flex-col px-4 pb-7">
              {children}
            </main>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
