import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/common/ui/carousel';

import { Bed, Bone, Candy, Cat, Dog, Fish, Tablets } from 'lucide-react';

import { GiDogBowl, GiJumpingDog, GiToothbrush } from 'react-icons/gi';
import { GiHeartNecklace } from 'react-icons/gi';

const categories = [
  { icon: Dog, label: 'Perros' },
  { icon: Cat, label: 'Gatos' },
  { icon: Fish, label: 'Mas animales' },
  { icon: GiJumpingDog, label: 'Juguetes' },
  { icon: GiHeartNecklace, label: 'Correas y Collares' },
  { icon: GiToothbrush, label: 'Higiene' },
  { icon: Tablets, label: 'Medicina & Antiparacitarios' },
  { icon: Bed, label: 'Camas para mascotas' },
  { icon: GiDogBowl, label: 'Platos para comer' },
  { icon: Bone, label: 'Accesorios' },
  { icon: Candy, label: 'Premios y golosinas' },
];

export function CarouselCategories() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full mx-auto max-w-screen-xl py-6 px-4 md:px-6"
    >
      <CarouselContent>
        {categories.map((category, index) => (
          <CarouselItem key={index} className="basis-auto">
            <div className="group flex flex-row items-center gap-x-1 bg-neutral-50 border border-neutral-200 shadow-sm rounded-full px-4 py-2 cursor-pointer">
              <category.icon
                size={20}
                className="text-neutral-500 group-hover:text-brand-700"
              />
              <h2 className="text-sm text-neutral-800 font-medium group-hover:text-brand-700">
                {category.label}
              </h2>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
