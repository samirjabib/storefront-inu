import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

export const initializeOptions = (
  product: PricedProduct,
  setOptions: React.Dispatch<React.SetStateAction<Record<string, string>>>
) => {
  const initialOptions: Record<string, string> = {};
  product.options?.forEach((option) => {
    initialOptions[option.id] = '';
  });
  setOptions(initialOptions);
};

export const computeVariantRecord = (variants: PricedProduct['variants']) => {
  const map: Record<string, Record<string, string>> = {};
  variants.forEach((variant) => {
    if (variant.id && variant.options) {
      const temp: Record<string, string> = {};
      variant.options.forEach((option) => {
        temp[option.id] = option.value;
      });
      map[variant.id] = temp;
    }
  });
  return map;
};

export const findSelectedVariant = (
  variants: PricedProduct['variants'],
  variantRecord: Record<string, Record<string, string>>,
  options: Record<string, string>
) => {
  return variants.find((variant) => {
    const record = variantRecord[variant.id];
    return record && isEqual(record, options);
  });
};

export const autoSelectVariant = (
  variants: PricedProduct['variants'],
  variantRecord: Record<string, Record<string, string>>,
  setOptions: React.Dispatch<React.SetStateAction<Record<string, string>>>
) => {
  if (variants.length === 1 && variants[0].id) {
    setOptions(variantRecord[variants[0].id]);
  }
};

export const checkStock = (
  variants: PricedProduct['variants'],
  selectedVariant?: PricedProduct['variants'][0]
) => {
  const selected = variants.find(
    (variant) => variant.id === selectedVariant?.id
  );
  if (!selected) return false;

  if (!selected.manage_inventory || selected.allow_backorder) {
    return true;
  }

  return selected.inventory_quantity && selected.inventory_quantity > 0;
};
