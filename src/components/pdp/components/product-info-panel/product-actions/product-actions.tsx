'use client';
import { Button } from '@/components/common/ui/button';
import ProductPaymentMethods from '../product-payment-methods/product-payment-methods';
import useSkuSelector from '@/components/pdp/hooks/useSkuSelector';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';
import ProductSkuSelect from '../product-sku-select';
import { Region } from '@medusajs/medusa';
import ProductPricing from '../product-pricing/product-pricing';
import ProductPayWithAddi from '../product-payment-methods/product-pay-with-addi';

type ProductActionsProps = {
  product: PricedProduct;
  region: Region;
  disabled?: boolean;
};

export type PriceType = {
  calculated_price: string;
  original_price?: string;
  price_type?: 'sale' | 'default';
  percentage_diff?: string;
};

export default function ProductActions({
  product,
  region,
  disabled,
}: ProductActionsProps) {
  const { options, inStock, isAdding, updateOptions, variant } = useSkuSelector(
    { product }
  );

  return (
    <div>
      <div className="flex flex-col gap-2 mb-4">
        <h3 className="text-sm font-semibold">Seleccione su referencia :</h3>
        {(product.options || []).map((option, index) => (
          <ProductSkuSelect
            key={index}
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
        disabled={!inStock || !variant || !!disabled || isAdding}
        className="w-full"
        data-testid="add-product-button"
      >
        {!variant
          ? 'Selecciona variante'
          : !inStock
            ? 'Sin stock'
            : 'Añadir al carrito'}
      </Button>
    </div>
  );
}
