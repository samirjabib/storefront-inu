import Image from 'next/image';
import { Product_Mock } from '@/lib/mocks/mocks';
import { cn, shortenProductName } from '@/lib/utils';
import { Separator } from '@/components/common/ui/separator';
import ProductCardSmallPricing from '@/components/common/products/common/product-card-small/product-card-small-pricing';
import CartProductQuantity from './cart-product-quantity';
import CartProductImage from './cart-product-image';

export function CartProduct({
  product,
  containerStyles,
}: {
  product: Product_Mock;
  containerStyles?: string;
}) {
  return (
    <article
      className={cn(
        'group w-full min-h-32 rounded-lg px-2 py-8 relative cursor-pointer grid grid-cols-6 gap-x-4 bg-white',
        containerStyles
      )}
    >
      <CartProductImage product={product} />
      <section className="col-span-4">
        <h3
          id={`product-name-${product.id}`}
          className="text-sm md:text-sm group-hover:text-foreground mb-2"
        >
          {shortenProductName(product.product_name)}
        </h3>
        <ProductCardSmallPricing product={product} />
        <CartProductQuantity />
      </section>
    </article>
  );
}
