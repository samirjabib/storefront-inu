'use client';

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
			<SheetTrigger>
				<AlignJustify size={24} className='text-white' />
			</SheetTrigger>
			<SheetContent side={'left'} className='bg-neutral-100'>
				<SheetHeader>
					<SheetTitle>Productos</SheetTitle>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default SideMenu;
