import ProductReview from './product-review';
import ProductAdditionalInformation from './product-additional-information/product-additional-information';
import { Separator } from '@/components/common/ui/separator';
import { ProductSpecifications } from './product-specification';
import ProductTabs from './product-tabs/product-tabs';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';
import { Suspense } from 'react';
import { Region } from '@medusajs/medusa';
import ProductActions from './product-actions/product-actions';
import ProductActionsWrapper from './product-actions/product-actions-wrapper';
import LocalizedClientLink from '@/components/common/localized-client-link/localized-client-link';

export default function ProductInfoPanel({
  product,
  region,
}: {
  product: PricedProduct;
  region: Region;
}) {
  return (
    <section className="w-full lg:w-1/2 gap-4 flex flex-col">
      <div className="flex flex-col w-full bg-white rounded-lg shadow-sm p-4 gap-4 lg:p-6">
        <header className="flex gap-2 text-xs text-muted-foreground font-normal">
          <p>Nuevo</p>
          <span>|</span>
          <p>+100 Vendidos</p>
        </header>
        <h1 className="h1 card-foreground capitalize">{product.title}</h1>
        <ProductReview review_rating={4.5} />
        <Suspense
          fallback={
            <ProductActions disabled={true} product={product} region={region} />
          }
        >
          <ProductActionsWrapper id={product.id || ''} region={region} />
        </Suspense>

        <Separator className="my-4" />
        <ProductAdditionalInformation />
      </div>
      <div className="flex flex-col w-full bg-white rounded-lg shadow-sm p-4 gap-2 lg:p-6">
        <div className="flex flex-col w-full mb-4">
          <h3 className="text-base font-bold text-neutral-900 mb-4">
            Detalles del producto
          </h3>
          <ul className="flex w-full flex-col gap-2 lg:max-w-[70%]">
            <li className="text-sm flex gap-2 font-normal">
              <span className="text-neutral-600 w-1/3">Marca:</span>
              <LocalizedClientLink href="/" className="w-2/3 underline">
                Max Vita
              </LocalizedClientLink>
            </li>
            <li className="text-sm flex gap-2 font-normal">
              <span className="text-neutral-600 w-1/3">Categoria:</span>
              <LocalizedClientLink href="/" className="w-2/3 underline">
                Alimento de perros
              </LocalizedClientLink>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col mb-4">
          <h3 className="text-base font-bold mb-4">Descripcion</h3>
          <p className="text-base">{product.description}</p>
        </div>
        <ProductSpecifications />
      </div>
      <div className="flex flex-col w-full bg-white rounded-lg shadow-sm p-4 gap-2 lg:p-6">
        <ProductTabs />
      </div>
    </section>
  );
}
