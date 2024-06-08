import { Product_Mock } from '@/lib/mocks/mocks';
import { ProductCard } from '../../common/products/common/product-card/product-card';

export default function SellerProductGrid({
  collection,
}: {
  collection: Product_Mock[];
}) {
  return (
    <article>
      <section className="md:flex w-full gap-4 hidden">
        <div className="bg-neutral-200 p-4 md:rounded-lg flex flex-col w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full rounded-lg border border-gray-200">
            {collection.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </article>
  );
}
