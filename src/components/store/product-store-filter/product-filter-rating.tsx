import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '@/components/common/ui/accordion';
import { Checkbox } from '@/components/common/ui/checkbox';

export default function ProductFilterRating() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm text-gray-800">
          Puntuación del Producto
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col justify-start gap-2">
            <div className="flex flex-row items-center gap-x-2">
              <Checkbox id="rating-1" />
              <label htmlFor="rating-1" className="text-sm font-normal">
                ⭐️⭐️⭐️⭐️⭐️
              </label>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Checkbox id="rating-2" />
              <label htmlFor="rating-2" className="text-sm font-normal">
                ⭐️⭐️⭐️⭐️
              </label>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Checkbox id="rating-3" />
              <label htmlFor="rating-3" className="text-sm font-normal">
                ⭐️⭐️⭐️
              </label>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Checkbox id="rating-4" />
              <label htmlFor="rating-4" className="text-sm font-normal">
                ⭐️⭐️
              </label>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Checkbox id="rating-5" />
              <label htmlFor="rating-5" className="text-sm font-normal">
                ⭐️
              </label>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
