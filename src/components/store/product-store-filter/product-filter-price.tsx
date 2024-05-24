import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '@/components/common/ui/accordion';
import { Checkbox } from '@/components/common/ui/checkbox';

export default function ProductFilterPrice() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm text-gray-800">
          Precio
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col justify-start gap-2">
            <div className="flex flex-row items-center gap-x-2">
              <Checkbox id="price-1" />
              <label htmlFor="price-1" className="text-sm font-normal">
                Menor de $10.000
              </label>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Checkbox id="price-2" />
              <label htmlFor="price-2" className="text-sm font-normal">
                Entre $10.000 y $50.000
              </label>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Checkbox id="price-3" />
              <label htmlFor="price-3" className="text-sm font-normal">
                Entre $50.000 y $100.000
              </label>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Checkbox id="price-4" />
              <label htmlFor="price-4" className="text-sm font-normal">
                Entre $100.000 y $200.000
              </label>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Checkbox id="price-5" />
              <label htmlFor="price-5" className="text-sm font-normal">
                Más de $200.000
              </label>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
