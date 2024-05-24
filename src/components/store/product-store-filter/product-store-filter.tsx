import ProductFilterAvalability from './product-availability';
import ProductFilterBrand from './product-filter-brand';
import ProductFilterCondition from './product-filter-condition';
import ProductFilterDiscount from './product-filter-discount';
import ProductFilterPrice from './product-filter-price';
import ProductFilterRating from './product-filter-rating';
import ProductFilterSeller from './product-filter-seller';

export default function ProductStoreFilter() {
  return (
    <div>
      <ProductFilterPrice />
      <ProductFilterBrand />
      <ProductFilterDiscount />
      <ProductFilterAvalability />
      <ProductFilterCondition />
      <ProductFilterSeller />
      <ProductFilterRating />
    </div>
  );
}
