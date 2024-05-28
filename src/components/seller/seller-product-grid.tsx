import { Product_Mock } from '@/lib/mocks/mocks';
import { ProductCardSmall } from '../common/products/common/product-card-small/product-card-small';

export default function SellerProductGrid({
  collection,
}: {
  collection: Product_Mock[];
}) {
  return (
    <article className="">
      <section className="flex w-full gap-4">
        <div className="bg-brand-100 p-4 md:p-6  md:rounded-lg flex flex-col w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full bg-white rounded-lg border border-gray-200">
            {collection.map((product) => (
              <ProductCardSmall product={product} containerStyles="w-full" />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
