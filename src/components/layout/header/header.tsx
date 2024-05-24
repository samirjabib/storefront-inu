import { listRegions } from '@/lib/data/data';
import SideMenu from './side-menu';
import { Bell, Heart, ShoppingCart } from 'lucide-react';
import Search from './search';
import Link from 'next/link';
import ActionsBar from './actions-bar';
import AuthModal from '@/components/auth/auth-modal';

export default async function Header() {
  const regions = await listRegions().then((regions) => regions);
  return (
    <div className="sticky top-0 inset-x-0 z-50 group bg-brand-500 border-b border-brand-500">
      <header className="relative p-4 md:p-6 duration-200 max-w-7xl mx-auto">
        <nav className="flex flex-col lg:flex-row h-full gap-4">
          <div className="flex flex-1 items-center justify-between mb-4 lg:mb-0 gap-4">
            <div className="flex items-center w-full gap-4">
              <SideMenu regions={regions} />
              <Search className="hidden lg:flex lg:flex-grow lg:max-w-xl" />
              <Link
                href={'/'}
                className="bg-accent-primary-300 gap-2 hover:bg-accent-primary-500 py-2 px-4 rounded-full flex items-center justify-center"
              >
                <p className="text-white text-sm font-semibold">Promociones</p>
              </Link>
            </div>
            <div className="flex gap-6 items-center cursor-pointer ">
              <div className="relative">
                <div className="w-2 h-2 bg-accent-secondary-500 rounded-full absolute top-0 right-1" />
                <Bell size={24} className="text-white" />
              </div>
              <Heart size={24} className="text-white" />
              <AuthModal />
              <ShoppingCart size={24} className="text-white" />
            </div>
          </div>
          <ActionsBar />
        </nav>
      </header>
    </div>
  );
}
