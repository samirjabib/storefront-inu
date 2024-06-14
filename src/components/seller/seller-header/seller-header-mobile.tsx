import SellerSearch from '../seller-search';
import { SellerStoreFilterMobile } from '../seller-store-filter-mobile/seller-store-filter-mobile';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

export default function SellerHeaderMobile() {
  return (
    <div className="w-full fixed top-0 z-50 max-w-7xl mx-auto">
      <header className="gap-x-4 p-4 flex flex-row justify-between items-center bg-primary drop-shadow">
        <div className="flex flex-row gap-x-6">
          <div className="flex items-center justify-center gap-x-1">
            <ArrowLeft className="text-primary-foreground" size={24} />
            <span className="text-primary-foreground text-sm hidden md:block">
              Regresar
            </span>
          </div>
          <SellerSearch />
        </div>
        <div className="flex flex-row gap-x-6">
          <SellerStoreFilterMobile />
          <ShoppingCart size={24} className="text-primary-foreground" />
        </div>
      </header>
    </div>
  );
}
