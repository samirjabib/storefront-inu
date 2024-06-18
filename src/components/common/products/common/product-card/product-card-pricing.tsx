import { ProductPreviewType } from '@/lib/types/global';

export default function ProductCardPricing({
  product,
}: {
  product: ProductPreviewType;
}) {
  if (product.price?.difference && product.price.price_type === 'sale') {
    return (
      <div className="flex flex-col mt-2">
        <p className="text-xs text-gray-300 line-through">
          $ {product.price.original_price}
        </p>
        <p className="text-lg text-neutral-900 font-semibold">
          $ {product.price.calculated_price}
        </p>
      </div>
    );
  }

  //TODO** work on this later
  //   if (product.free_delivery)
  //     return (
  //       <div className="flex gap-4 items-center mt-4">
  //         <p className="text-lg text-neutral-900 font-semibold ">
  //           $ {product.price}
  //         </p>
  //         <span className="text-xs text-accent-terciary-500 font-normal">
  //           Envío gratis!
  //         </span>
  //       </div>
  //     );

  return (
    <p className="text-lg text-neutral-900 font-semibold ">
      $ {product.price?.original_price}
    </p>
  );
}
