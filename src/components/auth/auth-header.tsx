// NavigationHeader.tsx
import Image from 'next/image';
import React from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';

interface AuthHeaderNavigationProps {
  title: string;
  onBackClick: () => void;
}

const AuthHeaderNavigation: React.FC<AuthHeaderNavigationProps> = ({
  title,
  onBackClick,
}) => (
  <div>
    <div className="mb-8 mt-2 flex flex-row gap-x-2 items-center">
      <button
        type="button"
        onClick={onBackClick}
        className="text-alpha-700 transition-colors hover:text-alpha-900"
      >
        <BiLeftArrowAlt className="text-2xl" />
      </button>
      <h3 className="text-2xl font-bold text-alpha-900">{title}</h3>
    </div>
  </div>
);

export default AuthHeaderNavigation;
