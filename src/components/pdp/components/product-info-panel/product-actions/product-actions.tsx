'use client';
import { Button } from '@/components/common/ui/button';
import ProductPayWithAddi from '../product-pay-with-addi';
import ProductPaymentMethods from '../product-payment-methods/product-payment-methods';
import useSkuSelector from '@/components/pdp/hooks/useSkuSelector';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';
import ProductSkuSelect from '../product-sku-select';
import { Region } from '@medusajs/medusa';
import ProductPricing from '../product-pricing/product-pricing';

export default function ProductActions({
  product,
  region,
  disabled,
}: {
  product: PricedProduct;
  region: Region;
  disabled?: boolean;
}) {
  const { options, inStock, isAdding, setIsAdding, updateOptions, variant } =
    useSkuSelector({ product });

  return (
    <div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Seleccione su referencia :</h3>
        {(product.options || []).map((option) => (
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
      <ProductPricing product={product} region={region} variant={variant} />
      <div className="py-4 flex flex-col gap-y-2">
        <ProductPaymentMethods />
        <ProductPayWithAddi />
      </div>

      <div className="w-full flex flex-col gap-2">
        <Button className="font-bold text-base">Añadir al carrito</Button>
      </div>
    </div>
  );
}
