'use client';
import { Button } from '@/components/common/ui/button';
import ProductPaymentMethods from '../product-payment-methods/product-payment-methods';
import useSkuSelector from '@/components/pdp/hooks/useSkuSelector';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';
import ProductSkuSelect from '../product-sku-select';
import { Region } from '@medusajs/medusa';
import ProductPricing from '../product-pricing/product-pricing';
import ProductPayWithAddi from '../product-payment-methods/product-pay-with-addi';

export default function ProductActions({
  product,
  region,
  disabled,
}: {
  product: PricedProduct;
  region: Region;
  disabled?: boolean;
}) {
  const { options, inStock, isAdding, updateOptions, variant } = useSkuSelector(
    { product }
  );

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

      <Button
        className="font-bold text-base w-full"
        data-testid="add-product-button"
        variant={inStock ? 'default' : 'outline'}
        disabled={!inStock || !variant || !!disabled || isAdding}
      >
        {!variant
          ? 'Selecciona una referencia'
          : !inStock
            ? 'Sin stock'
            : 'Agregar al carrito'}
      </Button>
    </div>
  );
}
