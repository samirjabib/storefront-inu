'use client';
import { Ellipsis } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/common/ui/sheet';
import { Region } from '@medusajs/medusa';

import { AlignJustify } from 'lucide-react';

const SideMenuItems = {
  Home: '/',
  Store: '/store',
  Search: '/search',
  Account: '/account',
  Cart: '/cart',
};

const SideMenu = ({ regions }: { regions: Region[] | null }) => {
  return (
    <Sheet>
      <SheetTrigger className="flex gap-2">
        <AlignJustify size={24} className="text-white" />
        <h3 className="text-primary-foreground hidden lg:block text-base font-bold">
          Menú
        </h3>
      </SheetTrigger>
      <SheetContent side={'left'} className="bg-neutral-100">
        <SheetHeader>
          <div className="flex flex-row items-center justify-between absolute w-full bottom-0 left-0 p-5 bg-neutral-100 border-t border-neutral-200 shadow-sm">
            <div className="flex flex-row items-center gap-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full" />
              <h4 className="text-gray-800 text-xs">Samir jabib</h4>
            </div>
            <div>
              <Ellipsis className="text-gray-500" size={24} />
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
