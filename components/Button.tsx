import React from 'react';

interface IProps {
  children: React.ReactNode;
  style: 'primary' | 'secondary';
  type: 'button' | 'submit';
  toggleShow: boolean;
  setToggleShow: (toggleShow: boolean) => void;
}

function Button({ children, style, toggleShow, setToggleShow, type }: IProps) {
  const commonClass =
    'mt-5 w-80 rounded-full py-2 text-center font-semibold md:text-xl';
  let varClass = '';
  switch (style) {
    case 'primary':
      varClass =
        'bg-twitter-blue-normal  text-white duration-300 hover:bg-twitter-blue-medium';
      break;
    case 'secondary':
      varClass =
        'mb-10 border border-twitter-blue-normal bg-white text-twitter-blue-normal duration-300 hover:bg-twitter-blue-light';
      break;
  }
  return (
    <button
      type={type}
      className={`${commonClass} ${varClass}`}
      onClick={() =>
        type !== 'submit'
          ? setToggleShow(!toggleShow)
          : console.log('this is a submit')
      }
    >
      {children}
    </button>
  );
}

export default Button;
