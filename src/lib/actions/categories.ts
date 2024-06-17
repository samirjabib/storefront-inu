import { cache } from 'react';
import { ProductCategoryWithChildren } from '../types/global';
import { medusaClient } from '../config';

export const getCategories = cache(async function (
  offset: number = 0,
  limit: number = 100
): Promise<{
  product_categories: ProductCategoryWithChildren[];
  count: number;
}> {
  const { product_categories, count } = await medusaClient.productCategories
    .list({ limit, offset, include_descendants_tree: true })
    .catch((err) => {
      throw err;
    });

  return {
    product_categories,
    count,
  };
});
