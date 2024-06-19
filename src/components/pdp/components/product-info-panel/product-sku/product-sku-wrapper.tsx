import { Region } from '@medusajs/medusa';
import ProductSku from './product-sku';
import { retrievePricedProductById } from '@/lib/actions/products';

/**
 * Fetches real time pricing for a product and renders the product actions component.
 */

export default async function ProductSkuWrapper({
  id,
  region,
}: {
  id: string;
  region: Region;
}) {
  const product = await retrievePricedProductById({ id, regionId: region.id });

  if (!product) {
    return null;
  }

  return <ProductSku product={product} region={region} />;
}
