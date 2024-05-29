import ProductVitrine from '@/components/common/products/product-vitrine/product-vitrine';

import SellerHeaderMobile from '@/components/seller/seller-header/seller-header-mobile';
import SellerProductGrid from '@/components/seller/seller-product-grid/seller-product-grid';
import SellerProductGridMobile from '@/components/seller/seller-product-grid/seller-product-grid-mobile';
import SellerSidebar from '@/components/seller/seller-sidebar/seller-sidebar';

import ProductStorePagination from '@/components/store/product-store-pagination';

import { collection_mock, Product_Mock } from '@/lib/mocks/mocks';

export default function Seller() {
  return (
    <main>
      <div className="hidden md:grid grid-cols-12 max-w-7xl mx-auto px-4 md:px-6 gap-x-8 mt-8">
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
      <div className="md:hidden mt-52">
        <SellerHeaderMobile />
        <ProductVitrine title="En promocion" />
        <ProductVitrine title="Agregado recientemente" />
        <SellerProductGridMobile
          collection={collection_mock as unknown as Product_Mock[]}
        />
      </div>
    </main>
  );
}
