import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

export default function ProductDescription({
  product,
}: {
  product: PricedProduct;
}) {
  return (
    <div className="w-full flex flex-col mb-4">
      <h3 className="text-base font-bold mb-4">Descripcion</h3>
      <p className="text-base">{product.description}</p>
    </div>
  );
}
