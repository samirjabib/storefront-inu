import { cache } from 'react';
import { ProductCategoryWithChildren } from '../types/global';
import { medusaClient } from '../config';

export const getCategoriesList = cache(async function (
  offset: number = 0,
  limit: number = 100
): Promise<{
  product_categories: ProductCategoryWithChildren[];
  count: number;
}> {
  const { product_categories, count } = await medusaClient.productCategories
    .list({ limit, offset }, { next: { tags: ['categories'] } })
    .catch((err) => {
      throw err;
    });

  return {
    product_categories,
    count,
  };
});
