import { Separator } from '@/components/common/ui/separator';
import BreadCrumbSeller from '@/components/seller/bread-crumb-seller';
import SellerProductGrid from '@/components/seller/seller-product-grid';

import BreadCrumbStore from '@/components/store/bread-crumb-store';
import ProductStoreFilter from '@/components/store/product-store-filter/product-store-filter';
import ProductStorePagination from '@/components/store/product-store-pagination';

import { collection_mock, Product_Mock } from '@/lib/mocks/mocks';

export default function Seller() {
  return (
    <main>
      {/* <BreadCrumbSeller /> */}
      <div className="bg-neutral-50 shadow-sm border border-gray-200 flex flex-row items-center gap-x-4 px-4 md:px-6 py-4 md:py-6">
        <div className="w-16 h-16 rounded-lg shadow-lg border-2 border-gray-200" />
        <div>
          <h1 className="text-base text-gray-800 font-semibold">Gamestop</h1>
          <p className="text-sm text-gray-500">Tienda oficial</p>
        </div>
      </div>
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

      <div className="md:hidden mt-4">
        <div className="px-4 md:px-6 mb-8">
          <SellerProductGrid
            collection={collection_mock as unknown as Product_Mock[]}
          />
        </div>
      </div>
    </main>
  );
}
