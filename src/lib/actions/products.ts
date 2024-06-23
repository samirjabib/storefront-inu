import { StoreGetProductsParams } from '@medusajs/medusa';
import { cache } from 'react';
import { ProductPreviewType } from '../types/global';
import transformProductPreview from '../utils/transform-product-preview';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';
import { medusaClient } from '../config';
import { getRegion } from './regions';
import getMedusaHeaders from '../utils/get-medusa-headers';

const emptyResponse = {
  response: { products: [], count: 0 },
  nextPage: null,
};

export const retrievePricedProductById = cache(async function ({
  id,
  regionId,
}: {
  id: string;
  regionId: string;
}) {
  const headers = getMedusaHeaders(['products']);

  return medusaClient.products
    .retrieve(`${id}?region_id=${regionId}`, headers)
    .then(({ product }) => product)
    .catch((err) => {
      console.log(err);
      return null;
    });
});

export const getProductByHandle = cache(async function (
  handle: string
): Promise<{ product: PricedProduct }> {
  const headers = getMedusaHeaders(['products']);

  const product = await medusaClient.products
    .list({ handle }, headers)
    .then(({ products }) => products[0])
    .catch((err) => {
      throw err;
    });

  console.log(product);

  return { product };
});

export const getProductsList = cache(async function ({
  pageParam = 0,
  queryParams,
  countryCode,
}: {
  pageParam?: number;
  queryParams?: StoreGetProductsParams;
  countryCode: string;
}): Promise<{
  response: { products: ProductPreviewType[]; count: number };
  nextPage: number | null;
  queryParams?: StoreGetProductsParams;
}> {
  const limit = queryParams?.limit || 12;

  const region = await getRegion(countryCode);

  if (!region) {
    return emptyResponse;
  }

  const { products, count } = await medusaClient.products
    .list(
      {
        limit,
        offset: pageParam,
        region_id: region.id,
        ...queryParams,
      },
      { next: { tags: ['products'] } }
    )
    .then((res) => res)
    .catch((err) => {
      throw err;
    });

  const transformedProducts = products.map((product: PricedProduct) => {
    return transformProductPreview(product, region!);
  });

  const nextPage = count > pageParam + 1 ? pageParam + 1 : null;

  return {
    response: { products: transformedProducts, count },
    nextPage,
    queryParams,
  };
});
