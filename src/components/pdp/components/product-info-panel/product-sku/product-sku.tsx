'use client';
import { Region } from '@medusajs/medusa';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

import ProductSkuSelect from './product-sku-select';
import useSkuSelector from '@/components/pdp/hooks/useSkuSelector';

type Props = {
  product: PricedProduct;
  region: Region;
  disabled?: boolean;
};

export default function ProductSku({ product, region, disabled }: Props) {
  const { options, inStock, isAdding, setIsAdding, updateOptions, variant } =
    useSkuSelector({ product });

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold">Seleccione su referencia :</h3>
      {(product.options || []).map((option: any) => (
        <ProductSkuSelect
          option={option}
          current={options[option.id]}
          updateOption={updateOptions}
          title={option.title}
          data-testid="product-options"
          disabled={!!disabled || isAdding}
        />
      ))}
    </div>
  );
}
