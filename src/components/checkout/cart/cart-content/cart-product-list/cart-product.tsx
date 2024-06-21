import { Product_Mock } from '@/lib/mocks/mocks';
import { cn, shortenProductName } from '@/lib/utils';
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
        'group w-full min-h-32 rounded-lg px-2 py-6 relative bg-white flex gap-4',
        containerStyles
      )}
    >
      <CartProductImage product={product} />
      <section className="w-full">
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
