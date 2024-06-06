import { listRegions } from '@/lib/data/data';
import SideMenu from './side-menu';
import { Bell, Heart, ShoppingCart, User } from 'lucide-react';
import Search from './search';
import Link from 'next/link';
import ActionsBar from './actions-bar';
import AuthModal from '@/components/auth/auth-modal';
import LocalizedClientLink from '@/components/common/localized-client-link/localized-client-link';
import Image from 'next/image';
import { assets } from '../../../../public/assets/assets';
import WhatsappLink from './whatsapp-link';

export default async function Header() {
  const regions = await listRegions().then((regions) => regions);
  return (
    <div className="sticky top-0 inset-x-0 z-50 group bg-primary border-b border-primary">
      <header className="relative p-4 md:p-6 duration-200 max-w-7xl mx-auto flex flex-col gap-4">
        <nav className="flex flex-col lg:flex-row h-full gap-4">
          <div className="flex flex-1 items-center justify-between lg:mb-0 gap-4">
            <div className="flex items-center w-full gap-4">
              <SideMenu regions={regions} />
              <Search />
              <WhatsappLink containerStyles="hidden lg:block" />
            </div>
            <div className="flex gap-6 items-center cursor-pointer ">
              <AuthModal children={<User size={24} className="text-white" />} />
              <ShoppingCart size={24} className="text-white" />
            </div>
          </div>
        </nav>
        <WhatsappLink containerStyles="lg:hidden" />
      </header>
    </div>
  );
}
