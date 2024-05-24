import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '@/components/common/ui/accordion';
import { Checkbox } from '@/components/common/ui/checkbox';

export default function ProductFilterDiscount() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm text-gray-800">
          Descuento
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col justify-start gap-2">
            <div className="flex flex-row items-center gap-x-2">
              <Checkbox id="price-1" />
              <label htmlFor="price-1" className="text-sm font-normal">
                10% de descuento y mas
              </label>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Checkbox id="price-2" />
              <label htmlFor="price-2" className="text-sm font-normal">
                25% de descuento y mas
              </label>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Checkbox id="price-2" />
              <label htmlFor="price-2" className="text-sm font-normal">
                45% de descuento y mas
              </label>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
