import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '@/components/common/ui/accordion';
import { Checkbox } from '@/components/common/ui/checkbox';

export default function ProductFilterAvalability() {
  return (
    <Accordion type="single" collapsible defaultValue="avalability">
      <AccordionItem value="avalability">
        <AccordionTrigger className="text-sm text-gray-800">
          Disponibilidad
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col justify-start gap-2">
            <div className="flex flex-row items-center gap-x-2">
              <Checkbox id="price-1" />
              <label htmlFor="price-1" className="text-sm font-normal">
                En Stock
              </label>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
