import Image from 'next/image';
import { assets } from '../../../../../public/assets/assets';

export default function ProductVitrine() {
  return (
    <div className="w-full lg:w-1/2 bg-white h-96 rounded-lg lg:sticky lg:top-36">
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
