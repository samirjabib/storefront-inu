'use client';

import { assets } from '../../../../public/assets/assets';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Link from 'next/link';

const categories = [
  { image: assets.dog, label: 'Perros' },
  { image: assets.cat, label: 'Gatos' },
  { image: assets.rat, label: 'Roedores' },
  { image: assets.bird, label: 'Aves' },
  { image: assets.reptile, label: 'Reptiles' },
  { image: assets.chicken, label: 'Granja y mas' },
];

export default function PetsCategories() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-6 w-full pb-12">
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent className="flex justify-around">
          {categories.map((item) => (
            <CarouselItem className="-ml-3 basis-5/12 md:basis-1/6 flex flex-col items-center justify-center gap-y-2">
              <Link
                className="border shadow-sm border-neutral-200  rounded-full p-3 flex items-center justify-center bg-gray-200 cursor-pointer"
                href={'/'}
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  className="object-cover rounded-full"
                  width={96}
                  height={96}
                />
              </Link>
              <h3 className="text-xs text-neutral-500 font-medium">
                {item.label}
              </h3>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
