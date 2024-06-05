import { Product_Mock } from '@/lib/mocks/mocks';
import ProductDisccountLabel from './product-disccount-label';
import FreeDelivery from '@/components/common/products/common/free-delivery';

export default function ProductPricing({ product }: { product: Product_Mock }) {
  if (product.has_disccount && product.price_with_disccount) {
    return (
      <div className="flex  gap-1 flex-col lg:flex-row lg:items-end lg:gap-4">
        <p className="text-lg text-muted-foreground line-through">
          $ {product.price}
        </p>
        <div className="flex items-end gap-4">
          <p className="text-2xl text-card-foreground font-bold">
            $ {product.price_with_disccount}
          </p>
          {product.has_disccount && <ProductDisccountLabel />}
        </div>
      </div>
    );
  }

  if (product.free_delivery)
    return (
      <div className="flex gap-4 items-center">
        <p className="text-lg text-neutral-900 font-semibold ">
          $ {product.price}
        </p>
        <FreeDelivery />
      </div>
    );

  return (
    <div className="flex">
      <p className="text-lg text-neutral-900 font-semibold ">
        $ {product.price}
      </p>
    </div>
  );
}
