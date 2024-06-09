import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/common/ui/carousel';
import { cn } from '@/lib/utils';

import { Bed, Bone, Candy, Cat, Dog, Fish, Tablets } from 'lucide-react';

import { GiDogBowl, GiToothbrush } from 'react-icons/gi';
import { GiHeartNecklace } from 'react-icons/gi';

const categories = [
  { icon: Dog, label: 'Alimento para perros', id: 1 },
  { icon: Cat, label: 'Alimento para gatos', id: 2 },
  { icon: Fish, label: 'Alimento para mas animales', id: 3 },
  { icon: Bone, label: 'Juguetes', id: 4 },
  { icon: GiHeartNecklace, label: 'Correas y Collares', id: 5 },
  { icon: GiToothbrush, label: 'Higiene', id: 6 },
  { icon: Tablets, label: 'Medicina & Antiparacitarios', id: 7 },
  { icon: Bed, label: 'Camas para mascotas', id: 8 },
  { icon: Candy, label: 'Premios y golosinas', id: 9 },
  { icon: GiDogBowl, label: 'Platos para comer', id: 10 },
  { icon: Bone, label: 'Accesorios', id: 11 },
];

export function CarouselCategories({ className }: { className?: string }) {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className={cn('w-full mx-auto max-w-screen-xl', className)}
    >
      {categories.map((category, index) => (
        <CarouselContent key={index}>
          <CarouselItem className="basis-auto">
            <div className="group flex flex-row items-center gap-x-1 bg-neutral-50 border border-neutral-200 shadow-sm rounded-full px-4 py-2 cursor-pointer">
              <category.icon
                size={16}
                className="text-neutral-500 group-hover:text-brand-700"
              />
              <h2 className="text-xs md:text-sm text-neutral-500 font-medium group-hover:text-brand-700">
                {category.label}
              </h2>
            </div>
          </CarouselItem>
        </CarouselContent>
      ))}
    </Carousel>
  );
}
