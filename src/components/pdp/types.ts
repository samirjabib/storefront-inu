// types.ts
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

export type OptionRecord = Record<string, string>;
export type VariantRecord = Record<string, OptionRecord>;

export interface SkuState {
  options: OptionRecord;
  isAdding: boolean;
  setOptions: (options: OptionRecord) => void;
  setIsAdding: (isAdding: boolean) => void;
  initializeOptions: (product: PricedProduct) => void;
}
