import { Separator } from '@/components/common/ui/separator';
import BreadCrumbSeller from '@/components/seller/seller-bread-crumb';
import SellerHeader from '@/components/seller/seller-header';
import SellerProductGrid from '@/components/seller/seller-product-grid';
import SellerSearch from '@/components/seller/seller-search';
import { SellerStoreFilterMobile } from '@/components/seller/seller-store-filter-mobile/seller-store-filter-mobile';

import ProductStoreFilter from '@/components/store/product-store-filter/product-store-filter';
import ProductStorePagination from '@/components/store/product-store-pagination';

import { collection_mock, Product_Mock } from '@/lib/mocks/mocks';

export default function Seller() {
  return (
    <main>
      <SellerHeader />
      <div className="hidden md:grid grid-cols-12 max-w-7xl mx-auto px-4 md:px-6 gap-x-8">
        <div className="col-span-4">
          <div className="py-6 flex flex-row items-center gap-x-3">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-800">
              Consolas
            </h1>
            <p className="text-xs text-gray-500 mt-1">(80+ resultados)</p>
          </div>
          <h2 className="text-gray-800 scroll-m-20 text-base font-semibold mb-4">
            Filtrar por
          </h2>
          <Separator />
          <ProductStoreFilter />
        </div>
        <div className="col-span-8">
          <SellerProductGrid
            collection={collection_mock as unknown as Product_Mock[]}
          />
          <ProductStorePagination />
        </div>
      </div>
      <div className="md:hidden mt-16">
        <div className="px-4 md:px-6 mb-8">
          <SellerProductGrid
            collection={collection_mock as unknown as Product_Mock[]}
          />
        </div>
      </div>
    </main>
  );
}
