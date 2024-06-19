import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';
import { ProductOption } from '@medusajs/product';

type ProductSkuSelectProps = {
  option: ProductOption;
  current: string;
  updateOption: (option: Record<string, string>) => void;
  title: string;
  disabled: boolean;
  'data-testid'?: string;
};

export default function ProductSkuSelect({
  current,
  updateOption,
  disabled,
  option,
  title,
}: ProductSkuSelectProps) {
  return (
    <div className="flex text-sm font-medium gap-2 p-4 bg-red-500 max-w-11 max-h-11 justify-center items-center rounded-lg border  bg-transparent">
      6kg
    </div>
  );
}
