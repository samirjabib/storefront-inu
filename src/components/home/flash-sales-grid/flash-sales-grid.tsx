import LocalizedClientLink from '@/components/common/localized-client-link/localized-client-link';
import { ProductCard } from '@/components/common/products/common/product-card/product-card';
import { Separator } from '@/components/common/ui/separator';
import { Product_Mock } from '@/lib/mocks/mocks';

export default function FlashSalesGrid({
  collection,
}: {
  collection: Product_Mock[];
}) {
  return (
    <article className="px-4 lg:px-6 max-w-screen-xl mx-auto mb-6">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-800 mb-4">
        ⚡Ventas Flash
      </h2>
      <Separator className="mb-4 bg-neutral-200" />
      <section className="flex w-full gap-4">
        <div className="bg-brand-100 p-6 rounded-lg flex flex-col  w-full lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
            {collection.slice(0, 4).map((product) => (
              <ProductCard
                containerStyles="max-w-full"
                product={product}
                key={product.id}
              />
            ))}
          </div>
          <LocalizedClientLink
            href=""
            className="text-sm font-semibold text-end hover:underline"
          >
            Ver todo
          </LocalizedClientLink>
        </div>
        <section className="w-1/2 hidden flex-col gap-6 lg:flex">
          <div className="w-full h-1/2 bg-gray-200 rounded-lg"></div>
          <div className="w-full h-1/2 bg-gray-200 rounded-lg"></div>
        </section>
      </section>
    </article>
  );
}
