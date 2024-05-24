import { cn } from '@/lib/utils';
import React, { ButtonHTMLAttributes } from 'react';

type AuthOptionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: () => void;
  children: React.ReactNode;
};

const AuthOptionButton: React.FC<AuthOptionButtonProps> = ({
  onClick,
  children,
  ...buttonProps
}) => (
  <button
    onClick={onClick}
    {...buttonProps}
    className={cn(
      'flex w-full items-center justify-center gap-3 rounded-lg  bg-white px-5 py-4 font-medium text-alpha-900 shadow-sm shadow-black/10 transition-all  hover:shadow-black/30 focus-visible:outline-none',
      buttonProps.className
    )}
  >
    {children}
  </button>
);

export default AuthOptionButton;
