import React from 'react';

interface IProps {
  children: React.ReactNode;
  style: 'primary' | 'secondary';
  type: 'button' | 'submit';
  handleClick?: () => void;
}

function Button({ children, style, handleClick = () => {}, type }: IProps) {
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
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
