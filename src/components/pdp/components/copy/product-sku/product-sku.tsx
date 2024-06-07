import ProductSkuFood from './product-sku-food';

export default function ProductSku() {
  const is_food = true;

  if (is_food)
    return (
      <div>
        <ProductSkuFood />
      </div>
    );
  <div>ProductSku</div>;
}
