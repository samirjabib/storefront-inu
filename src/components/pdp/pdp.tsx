import { PdpBreadcrumb } from './components/pdp-breadcrumb';
import ProductVitrine from './components/product-vitrine/product-vitrine';
import ProductInfoPanel from './components/product-info-panel/product-info-panel';

export default function Pdp() {
  return (
    <main className="w-full p-4 lg:p-6 max-w-screen-xl mx-auto">
      <PdpBreadcrumb />
      <div className="flex flex-col w-full lg:flex-row gap-6">
        <ProductVitrine />
        <ProductInfoPanel />
      </div>
    </main>
  );
}
