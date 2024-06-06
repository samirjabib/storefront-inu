import { cache } from 'react';
import {
  ProductCollectionWithPreviews,
  ProductPreviewType,
} from '../types/global';
import {
  Product,
  ProductCollection,
  StoreGetProductsParams,
} from '@medusajs/medusa';

import { medusaClient } from '../config';
import { getRegion } from './region';
import transformProductPreview from '../utils/transform-product-preview';

const emptyResponse = {
  response: { products: [], count: 0 },
  nextPage: null,
};

export const getCollectionsList = cache(async function (
  offset: number = 0,
  limit: number = 100
): Promise<{ collections: ProductCollection[]; count: number }> {
  const collections = await medusaClient.collections
    .list({ limit, offset }, { next: { tags: ['collections'] } })
    .then(({ collections }) => collections)
    .catch((err) => {
      throw err;
    });

  const count = collections.length;

  return {
    collections,
    count,
  };
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

  const transformedProducts = products.map((product) => {
    return transformProductPreview(product, region!);
  });

  const nextPage = count > pageParam + 1 ? pageParam + 1 : null;

  return {
    response: { products: transformedProducts, count },
    nextPage,
    queryParams,
  };
});

export const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3);

    if (!collections) {
      return null;
    }

    const collectionIds = collections.map((collection) => collection.id);

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection;

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          );
        }

        if (!collection) {
          return;
        }

        collection.products = response.products as unknown as Product[];
      })
    );

    return collections as unknown as ProductCollectionWithPreviews[];
  }
);
