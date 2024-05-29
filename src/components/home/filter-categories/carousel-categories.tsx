import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/common/ui/carousel';
import { MdPhoneIphone, MdSpeaker } from 'react-icons/md';
import { FaLaptop } from 'react-icons/fa';
import { TbSmartHome, TbHeadphonesFilled } from 'react-icons/tb';
import { IoGameController } from 'react-icons/io5';
import { PiTelevisionSimpleFill } from 'react-icons/pi';
import { BsSmartwatch } from 'react-icons/bs';

const categories = [
  { icon: TbSmartHome, label: 'Perros' },
  { icon: MdPhoneIphone, label: 'Gatos' },
  { icon: BsSmartwatch, label: 'Snacks' },
  { icon: FaLaptop, label: 'Juguetes' },
  { icon: IoGameController, label: 'Arenas' },
  { icon: PiTelevisionSimpleFill, label: 'Belleza e Higiene' },
  { icon: TbHeadphonesFilled, label: 'Antiparasitantes' },
  { icon: TbHeadphonesFilled, label: 'Componentes PC' },
  { icon: MdSpeaker, label: 'Producción musical' },
  { icon: BsSmartwatch, label: 'Relojes inteligentes' },
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
