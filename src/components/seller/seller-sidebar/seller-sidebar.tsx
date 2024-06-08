import { Separator } from '@/components/common/ui/separator';
import ProductStoreFilter from '@/components/store/product-store-filter/product-store-filter';
import BreadCrumbSeller from '../seller-bread-crumb';

export default function SellerSidebar() {
  return (
    <div>
      <BreadCrumbSeller />
      <div className="mb-8"></div>
      <h2 className="text-gray-800 scroll-m-20 text-base font-semibold mb-4">
        Filtrar por
      </h2>
      <Separator />
      <ProductStoreFilter />
    </div>
  );
}
