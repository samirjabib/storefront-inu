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
