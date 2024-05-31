import { Separator } from '@/components/common/ui/separator';
import Promises from '@/components/common/promises/promises';

import BreadCrumbStore from '@/components/store/bread-crumb-store';
import ProductStoreFilter from '@/components/store/product-store-filter/product-store-filter';
import ProductStorePagination from '@/components/store/product-store-pagination';
import StoreProductGrid from '@/components/store/store-product-grid';

import { collection_mock, Product_Mock } from '@/lib/mocks/mocks';
import { CarouselCategories } from '@/components/common/filter-categories/carousel-categories';

export default function Store() {
  return (
    <main>
      <BreadCrumbStore className="py-6" />

      <div className="hidden md:grid grid-cols-12 max-w-7xl mx-auto px-4 md:px-6 gap-x-8">
        <div className="col-span-4">
          <div className="flex flex-row items-center gap-x-3 mb-6">
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
          <CarouselCategories className="pb-6" />
          <StoreProductGrid
            products={collection_mock as unknown as Product_Mock[]}
          />
          <ProductStorePagination />
        </div>
      </div>

      <div className="md:hidden">
        <div className="px-4 md:px-6 mb-8">
          <CarouselCategories className="pb-6" />
          <div className="flex flex-row items-center gap-x-3 mb-3">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-800 ">
              Consolas
            </h1>
            <p className="text-xs text-gray-500 mt-1">(80+ resultados)</p>
          </div>
          <StoreProductGrid
            products={collection_mock as unknown as Product_Mock[]}
          />
        </div>
      </div>

      <Promises className="mb-8" />
    </main>
  );
}
