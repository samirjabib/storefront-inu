'use client';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/common/ui/sheet';

import { SlidersHorizontal, X } from 'lucide-react';

import { Button } from '@/components/common/ui/button';
import { useState } from 'react';
import ProductFilterPrice from '@/components/store/product-store-filter/product-filter-price';
import ProductFilterBrand from '@/components/store/product-store-filter/product-filter-brand';
import ProductFilterDiscount from '@/components/store/product-store-filter/product-filter-discount';
import ProductFilterAvalability from '@/components/store/product-store-filter/product-availability';
import ProductFilterCondition from '@/components/store/product-store-filter/product-filter-condition';
import ProductFilterSeller from '@/components/store/product-store-filter/product-filter-seller';
import ProductFilterRating from '@/components/store/product-store-filter/product-filter-rating';

export function SellerStoreFilterMobile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet
      open={isOpen}
      onOpenChange={(open: boolean) => {
        setIsOpen(open);
      }}
    >
      <SheetTrigger asChild>
        <SlidersHorizontal className="text-gray-500" size={28} />
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll w-full p-0">
        <SheetHeader className="px-4 pt-4 fixed top-0 left-0 w-full bg-white z-20">
          <div className="flex flex-row items-center justify-between border-b border-gray-200">
            <X className="text-gray-500" onClick={() => setIsOpen(false)} />
            <h2 className="text-sm">
              <span className="font-medium">Filtro</span>
              <span className="text-xs">(4)</span>
            </h2>
            <Button variant={'ghost'} className="p-0 text-sm text-primary">
              Limpiar
            </Button>
          </div>
        </SheetHeader>
        <div className="px-4 py-16">
          <ProductFilterPrice />
          <ProductFilterBrand />
          <ProductFilterDiscount />
          <ProductFilterAvalability />
          <ProductFilterCondition />
          <ProductFilterSeller />
          <ProductFilterRating />
        </div>

        <SheetFooter className="fixed bottom-0 left-0 w-full bg-blue-50 shadow-sm px-4 py-3 border-t-2 border-gray-200">
          <Button>Aplicar</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
