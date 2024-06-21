import { ShoppingCart, User } from 'lucide-react';

import AuthModal from '@/components/auth/auth-modal';

import Link from 'next/link';

export default async function AccountHeader() {
  return (
    <div className="sticky top-0 inset-x-0 z-50 group bg-primary border-b border-primary">
      <header className="relative p-4 md:p-6 duration-200 max-w-7xl mx-auto flex flex-col gap-4">
        <nav className="flex flex-col lg:flex-row h-full gap-4">
          <div className="flex flex-1 items-center justify-between lg:mb-0 gap-4">
            <div className="flex items-center w-full gap-4"></div>
            <div className="flex gap-6 items-center cursor-pointer ">
              <Link href={'/checkout/cart'}>
                <ShoppingCart size={24} className="text-primary-foreground" />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
