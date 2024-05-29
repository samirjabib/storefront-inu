'use client';
import Search from './search';
import { usePathname } from 'next/navigation';
import { ProductStoreFilterMobile } from '@/components/store/product-store-filter-mobile/product-store-filter-mobile';

export default function ActionsBar() {
  const pathname = usePathname();

  const isStorePage = pathname.includes('store');
  const isSeller = pathname.includes('seller');

  if (isStorePage) {
    return (
      <div className="flex flex-row items-center gap-x-4 md:hidden mt-4">
        <Search className="flex-1" />
        <div>
          <ProductStoreFilterMobile />
        </div>
      </div>
    );
  }

  if (isSeller) {
    return null;
  }

  return <Search className="md:hidden mt-4" />;
}
