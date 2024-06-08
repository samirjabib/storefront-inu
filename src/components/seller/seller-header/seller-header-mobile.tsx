import SellerSearch from '../seller-search';
import { SellerStoreFilterMobile } from '../seller-store-filter-mobile/seller-store-filter-mobile';
import { ArrowLeft } from 'lucide-react';

export default function SellerHeaderMobile() {
  return (
    <div className="w-full fixed top-0 z-50 md:hidden">
      <div className="max-w-7xl mx-auto">
        <header className="gap-x-4 p-4 flex flex-row justify-between items-center bg-primary drop-shadow">
          <div className="flex flex-row gap-x-3">
            <div className="flex items-center justify-center">
              <ArrowLeft className="text-primary-foreground" size={24} />
            </div>
            <SellerSearch />
          </div>
          <SellerStoreFilterMobile />
        </header>
      </div>
    </div>
  );
}
