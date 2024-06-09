import { PdpBreadcrumb } from './components/pdp-breadcrumb';
import ProductVitrine from './components/product-vitrine/product-vitrine';
import ProductInfoPanel from './components/product-info-panel/product-info-panel';
import SellerHeaderMobile from '../seller/seller-header/seller-header-mobile';

export default function Pdp() {
  return (
    <main className="w-full lg:p-6 max-w-screen-xl mx-auto">
      <SellerHeaderMobile />
      <div className="flex flex-col w-full lg:flex-row gap-6 pt-20 px-4">
        <ProductVitrine />
        <ProductInfoPanel />
      </div>
    </main>
  );
}
