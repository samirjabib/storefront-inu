import { collection_mock, Product_Mock } from '@/lib/mocks/mocks';
import ProductInfoPanelHeader from './product-info-panel-header';
import ProductName from './product-name';
import ProductPricing from './product-pricing/product-pricing';
import ProductReview from './product-review';
import ProductPaymentMethods from './product-payment-methods/product-payment-methods';
import ProductPayWithAddi from './product-pay-with-addi';
import ProductBuyNow from './product-buy-now';
import ProductAddToCart from './product-add-to-cart';
import ProductAdditionalInformation from './product-additional-information/product-additional-information';
import { Separator } from '@/components/common/ui/separator';
import ProductDetails from './product-details';
import ProductDescription from './product-description';
import { ProductSpecifications } from './product-specification';
import ProductTabs from './product-tabs/product-tabs';
import ProductSku from './product-sku/product-sku';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';
import { Suspense } from 'react';
import { Region } from '@medusajs/medusa';

export default function ProductInfoPanel({
  product,
}: {
  product: PricedProduct;
  region: Region;
}) {
  return (
    <section className="w-full lg:w-1/2 gap-4 flex flex-col">
      <div className="flex flex-col w-full bg-white rounded-lg shadow-sm p-4 gap-4 lg:p-6">
        <ProductInfoPanelHeader />
        <ProductName product_name={product.title} />
        <ProductReview review_rating={4.5} />
        <Suspense>
          <ProductSku product={product} region={} />
        </Suspense>
        <ProductPricing
          product={collection_mock[4] as unknown as Product_Mock}
        />
        <ProductPaymentMethods />
        <ProductPayWithAddi />
        <div className="w-full flex flex-col gap-2">
          <ProductBuyNow />
          <ProductAddToCart />
        </div>
        <Separator className="my-4" />
        <ProductAdditionalInformation />
      </div>
      <div className="flex flex-col w-full  bg-white  rounded-lg shadow-sm p-4 gap-2 lg:p-6">
        <ProductDetails product={product} />
        <ProductDescription />
        <ProductSpecifications />
      </div>
      <div className="flex flex-col w-full  bg-white  rounded-lg shadow-sm p-4 gap-2 lg:p-6">
        <ProductTabs />
      </div>
    </section>
  );
}
