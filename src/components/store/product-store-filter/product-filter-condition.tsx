import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '@/components/common/ui/accordion';
import { Checkbox } from '@/components/common/ui/checkbox';

export default function ProductFilterCondition() {
  return (
    <Accordion type="single" collapsible defaultValue="condition">
      <AccordionItem value="condition">
        <AccordionTrigger className="text-sm text-gray-800">
          Condición
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col justify-start gap-2">
            <div className="flex flex-row items-center gap-x-2">
              <Checkbox id="price-1" />
              <label htmlFor="price-1" className="text-sm font-normal">
                Nuevo
              </label>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Checkbox id="price-2" />
              <label htmlFor="price-2" className="text-sm font-normal">
                Usado
              </label>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
