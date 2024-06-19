import Image from 'next/image';
import { assets } from '../../../../../public/assets/assets';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

export default function ProductVitrine({
  product,
}: {
  product: PricedProduct;
}) {
  return (
    <div className="w-full lg:w-1/2 bg-white h-96 rounded-lg lg:sticky lg:top-0">
      <Image
        src={assets.dog_food_2}
        width={1920}
        height={1080}
        className="w-full h-full object-contain"
        alt={'comida de perro'}
      />
    </div>
  );
}
