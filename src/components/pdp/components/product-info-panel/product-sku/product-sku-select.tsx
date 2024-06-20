import { onlyUnique } from '@/lib/utils/only-unique';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';
import { ProductOption } from '@medusajs/product';

type ProductSkuSelectProps = {
  option: ProductOption;
  current: string;
};

export default function ProductSkuSelect({ option }: ProductSkuSelectProps) {
  const filteredOptions = option.values
    .map((value) => {
      return value.value;
    })
    .filter(onlyUnique);

  return (
    <div className="flex gap-x-2 flex-row">
      {filteredOptions.map((option) => {
        return (
          <div className="border-2 border-neutral-200 p-2 rounded-lg shadow-sm text-sm text-black opacity-70">
            {option}
          </div>
        );
      })}
    </div>
  );
}
