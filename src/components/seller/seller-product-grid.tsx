import LocalizedClientLink from '@/components/common/localized-client-link/localized-client-link';
import { ProductCard } from '@/components/common/products/common/product-card/product-card';
import { Product_Mock } from '@/lib/mocks/mocks';

export default function SellerProductGrid({
  collection,
}: {
  collection: Product_Mock[];
}) {
  return (
    <article className="">
      <section className="flex w-full gap-4">
        <div className="bg-brand-100 p-6 rounded-lg flex flex-col w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full border-2 border-red-00">
            {collection.map((product) => (
              <ProductCard
                containerStyles="max-w-full"
                product={product}
                key={product.id}
              />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
