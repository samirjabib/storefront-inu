import Image from 'next/image';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

export default function ProductVitrine({
  product,
}: {
  product: PricedProduct;
}) {
  if (!product) {
    return null;
  }

  return (
    <div className="w-full lg:w-1/2 bg-white h-96 rounded-lg lg:sticky lg:top-0">
      <Image
        src={product.thumbnail || ''}
        width={1920}
        height={1080}
        className="w-full h-full object-contain"
        alt={'comida de perro'}
      />
    </div>
  );
}
