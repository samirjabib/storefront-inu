import { cn } from '@/lib/utils';
import { onlyUnique } from '@/lib/utils/only-unique';
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
  option,
  current,
  disabled,
  title,
  updateOption,
  'data-testid': dataTestId,
}: ProductSkuSelectProps) {
  const filteredOptions = option.values
    .map((value) => {
      return value.value;
    })
    .filter(onlyUnique);

  return (
    <div className="flex gap-x-2 flex-row">
      {filteredOptions.map((value) => {
        return (
          <button
            disabled={disabled}
            key={option.product_id}
            className={cn(
              'border-2 p-2 rounded-lg shadow-sm text-sm text-black opacity-70',
              value === current ? 'border-primary' : 'border-neutral-200'
            )}
            data-testid="option-button"
            onClick={() => updateOption({ [option.id]: value })}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
}
