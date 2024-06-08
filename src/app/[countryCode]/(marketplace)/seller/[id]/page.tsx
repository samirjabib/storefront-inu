import SellerHeaderMobile from '@/components/seller/seller-header/seller-header-mobile';
import SellerProductGrid from '@/components/seller/seller-product-grid/seller-product-grid';
import SellerProductGridMobile from '@/components/seller/seller-product-grid/seller-product-grid-mobile';
import SellerSidebar from '@/components/seller/seller-sidebar/seller-sidebar';
import BreadCrumbStore from '@/components/store/bread-crumb-store';

import ProductStorePagination from '@/components/store/product-store-pagination';

import { collection_mock, Product_Mock } from '@/lib/mocks/mocks';

export default function Seller() {
  return (
    <main>
      <SellerHeaderMobile />
      <h1 className="pt-20 md:pt-28 pb-4 px-4 font-bold text-base mx-auto max-w-screen-xl">
        Alimentos para perro
      </h1>
      <div className="hidden md:grid grid-cols-12 max-w-7xl mx-auto px-4 gap-x-8 ">
        <div className="col-span-4">
          <SellerSidebar />
        </div>
        <div className="col-span-8">
          <SellerProductGrid
            collection={collection_mock as unknown as Product_Mock[]}
          />
          <div className="mt-3">
            <ProductStorePagination />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <BreadCrumbStore />
        <SellerProductGridMobile
          collection={collection_mock as unknown as Product_Mock[]}
        />
      </div>
    </main>
  );
}
