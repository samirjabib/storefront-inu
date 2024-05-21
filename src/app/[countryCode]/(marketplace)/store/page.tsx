import { dummieData } from "@/components/common/banner/data";

import BreadCrumbStore from "@/components/store/bread-crumb-store";
import StoreProductGrid from "@/components/store/store-product-grid";

import { collection_mock, Product_Mock } from "@/lib/mocks/mocks";

export default function Store() {
  return (
    <main className="bg-neutral-100">
      <div className="w-full  px-4 md:px-6 ">
        <div className="w-full min-h-24 rounded-lg shadow-sm border border-gray-200 bg-gray-200" />
      </div>
      <BreadCrumbStore />
      <div className="px-4 md:px-6 flex flex-col gap-y-2  pb-4">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-800">
          Category
        </h1>
        <p className="text-xs text-gray-500">(80+ resultados)</p>
      </div>

      <StoreProductGrid
        products={collection_mock as unknown as Product_Mock[]}
      />
    </main>
  );
}
