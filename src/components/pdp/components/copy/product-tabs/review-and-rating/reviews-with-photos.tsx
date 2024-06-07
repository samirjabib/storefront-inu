import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/common/ui/carousel';
import Image from 'next/image';
import { assets } from '../../../../../../../public/assets/assets';
import { Star } from 'lucide-react';

export default function ReviewWithPhotos() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
    >
      <CarouselContent>
        {Array.from({ length: 7 }).map((review_with_photo) => (
          <CarouselItem className="basis-auto">
            <div className="relative flex w-full max-h-96 max-w-60 rounded-lg">
              <Image
                src={assets.fake_photo_1}
                alt="photo-review"
                className="w-full object-cover rounded-lg h-full"
              />
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent rounded-b-lg"></div>
              <div className="absolute bottom-5 left-4 flex gap-2 items-center">
                <span className="text-lg text-neutral-50">5</span>
                <Star
                  size={16}
                  className={' fill-neutral-50 text-neutral-50'}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* 			<CarouselPrevious />
			<CarouselNext /> */}
    </Carousel>
  );
}
