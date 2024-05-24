'use client';
import { SlidersHorizontal } from 'lucide-react';
import Search from './search';
import { usePathname } from 'next/navigation';
import { ProductStoreFilterMobile } from '@/components/store/product-store-filter-mobile/product-store-filter-mobile';

export default function ActionsBar() {
  const pathname = usePathname();

  const isStorePage = pathname.includes('store');

  if (isStorePage) {
    return (
      <div className="flex flex-row items-center gap-x-4">
        <Search className="flex-1" />
        <div className="md:hidden">
          <ProductStoreFilterMobile />
        </div>
      </div>
    );
  }

  return <Search />;
}
