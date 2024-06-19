import { Product_Mock } from '@/lib/mocks/mocks';
import { CartProduct } from './cart-product';

export default function CartProductList({
  collection,
}: {
  collection: Product_Mock[];
}) {
  const limitedCollection = collection.slice(0, 2);

  const productNumber = 2;
  return (
    <div>
      <div className="flex flex-col w-full gap-2">
        {limitedCollection.map((product) => (
          <CartProduct
            key={product.id}
            product={product}
            containerStyles="w-full"
          />
        ))}
      </div>
      <p className="py-3 text-muted-foreground text-sm">
        {productNumber} Productos
      </p>
    </div>
  );
}
