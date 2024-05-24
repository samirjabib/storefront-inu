'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../common/ui/accordion';
import { Checkbox } from '../../common/ui/checkbox';
import ProductFilterBrand from './product-filter-brand';
import ProductFilterCondition from './product-filter-condition';
import ProductFilterDiscount from './product-filter-discount';
import ProductFilterPrice from './product-filter-price';

export default function ProductStoreFilter() {
  return (
    <div>
      <ProductFilterPrice />
      <ProductFilterBrand />
      <ProductFilterDiscount />
      <ProductFilterCondition />
    </div>
  );
}
