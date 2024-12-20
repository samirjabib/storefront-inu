'use client';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';
import { isEqual } from 'lodash';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';

export default function useSkuSelector({
  product,
}: {
  product: PricedProduct;
}) {
  const [options, setOptions] = useState<Record<string, string>>({});
  const [isAdding, setIsAdding] = useState(false);

  const countryCode = useParams().countryCode as string;

  const variants = product.variants;

  // initialize the option state
  useEffect(() => {
    const optionObj: Record<string, string> = {};

    for (const option of product.options || []) {
      Object.assign(optionObj, { [option.id]: undefined });
    }

    setOptions(optionObj);
  }, [product]);

  // memoized record of the product's variants
  const variantRecord = useMemo(() => {
    const map: Record<string, Record<string, string>> = {};

    for (const variant of variants) {
      if (!variant.options || !variant.id) continue;

      const temp: Record<string, string> = {};

      for (const option of variant.options) {
        temp[option.option_id] = option.value;
      }

      map[variant.id] = temp;
    }

    return map;
  }, [variants]);

  // memoized function to check if the current options are a valid variant
  const variant = useMemo(() => {
    let variantId: string | undefined = undefined;

    for (const key of Object.keys(variantRecord)) {
      if (isEqual(variantRecord[key], options)) {
        variantId = key;
      }
    }

    return variants.find((v) => v.id === variantId);
  }, [options, variantRecord, variants]);

  // if product only has one variant, then select it
  useEffect(() => {
    if (variants.length === 1 && variants[0].id) {
      setOptions(variantRecord[variants[0].id]);
    }
  }, [variants, variantRecord]);

  // update the options when a variant is selected
  const updateOptions = (update: Record<string, string>) => {
    setOptions({ ...options, ...update });
  };

  // check if the selected variant is in stock
  const inStock = useMemo(() => {
    // If we don't manage inventory, we can always add to cart
    if (variant && !variant.manage_inventory) {
      return true;
    }

    // If we allow back orders on the variant, we can add to cart
    if (variant && variant.allow_backorder) {
      return true;
    }

    // If there is inventory available, we can add to cart
    if (variant?.inventory_quantity && variant?.inventory_quantity > 0) {
      return true;
    }

    // Otherwise, we can't add to cart
    return false;
  }, [variant]);


  return {
    options,
    setOptions,
    inStock,
    variant,
    isAdding,
    setIsAdding,
    updateOptions,
  };
}
