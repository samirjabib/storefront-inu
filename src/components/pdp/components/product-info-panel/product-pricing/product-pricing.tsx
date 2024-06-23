'use client';
import ProductDisccountLabel from './product-disccount-label';
import {
  PricedProduct,
  PricedVariant,
} from '@medusajs/medusa/dist/types/pricing';
import { RegionInfo } from '@/lib/types/global';
import { getProductPrice } from '@/lib/utils/get-product-price';
import useSkuSelector from '@/components/pdp/hooks/useSkuSelector';

export default function ProductPricing({
  product,
  variant,
  region,
}: {
  product: PricedProduct;
  region: RegionInfo;
  variant: PricedVariant | undefined;
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: variant?.id,
    region,
  });

  const selectedPrice = variant ? variantPrice : cheapestPrice;

  if (selectedPrice?.price_type === 'sale') {
    return (
      <div className="flex  gap-1 flex-col lg:flex-row lg:items-end lg:gap-4">
        <p className="text-lg text-muted-foreground line-through">
          $ {selectedPrice.original_price}
        </p>
        <div className="flex items-end gap-4">
          <p className="text-2xl text-card-foreground font-bold">
            $ {selectedPrice.calculated_price}
          </p>
          {selectedPrice.percentage_diff && (
            <ProductDisccountLabel
              percentage_diff={selectedPrice.percentage_diff}
            />
          )}
        </div>
      </div>
    );
  }

  // if (product.free_delivery)
  //   return (
  //     <div className="flex gap-4 items-center">
  //       <p className="text-lg text-neutral-900 font-semibold ">
  //         $ {product.price}
  //       </p>
  //       <FreeDelivery />
  //     </div>
  //   );

  return (
    <div className="flex">
      <p className="text-lg text-neutral-900 font-semibold ">
        $ {selectedPrice?.original_price}
      </p>
    </div>
  );
}
