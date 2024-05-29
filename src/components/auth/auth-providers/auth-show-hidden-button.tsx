import React, { ButtonHTMLAttributes } from 'react';

const ShowHideButton: React.FC<
  {
    onClick: () => void;
    isShow: boolean;
    icon: React.ComponentType<{ className?: string }>;
  } & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ onClick, isShow, icon: Icon, ...buttonProps }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute right-4 top-3.5 text-lg text-zinc-600"
    {...buttonProps}
  >
    {isShow ? <Icon /> : <Icon />}
  </button>
);

export default ShowHideButton;
