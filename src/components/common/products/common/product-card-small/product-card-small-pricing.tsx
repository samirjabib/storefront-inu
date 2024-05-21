import { Product_Mock } from "@/lib/mocks/mocks";

export default function ProductCardSmallPricing({
  product,
}: {
  product: Product_Mock;
}) {
  if (product.has_disccount && product.price_with_disccount) {
    return (
      <div className="flex flex-col">
        <p className="text-xs text-gray-300 line-through">$ {product.price}</p>
        <p className="text-lg text-neutral-900 font-semibold">
          $ {product.price_with_disccount}
        </p>
      </div>
    );
  }

  if (product.free_delivery)
    return (
      <div className="flex flex-col">
        <p className="text-lg text-neutral-900 font-semibold ">
          $ {product.price}
        </p>
        <span className="text-xs text-accent-terciary-500 font-normal">
          Envío gratis!
        </span>
      </div>
    );
  return (
    <p className="text-base text-neutral-900 font-semibold ">
      $ {product.price}
    </p>
  );
}
