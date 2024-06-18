import { Product_Mock } from '@/lib/mocks/mocks';
import { CartProduct } from './cart-product/cart-product';
import { Separator } from '@/components/common/ui/separator';

export default function CartContent({
  collection,
}: {
  collection: Product_Mock[];
}) {
  const limitedCollection = collection.slice(0, 2);

  const productNumber = 2;

  return (
    <div className="p-4">
      <h1 className="text-foreground text-2xl mb-4 font-bold">Mi carrito</h1>
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
      <Separator />
    </div>
  );
}
