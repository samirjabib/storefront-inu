'use client';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/common/ui/sheet';

import { AlignJustify } from 'lucide-react';
import SideMenuHeader from './side-menu-header';

const SideMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger className="flex gap-2">
        <AlignJustify size={24} className="text-white" />
        <h3 className="text-primary-foreground hidden lg:block text-base font-bold">
          Menú
        </h3>
      </SheetTrigger>
      <SheetContent side={'left'} className="bg-neutral-100 p-0 m-0">
        <div className="px-4">{children}</div>
        <SideMenuHeader />
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
