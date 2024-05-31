import LocalizedClientLink from '@/components/common/localized-client-link/localized-client-link';
import { ProductCard } from '@/components/common/products/common/product-card/product-card';
import Heading from '@/components/common/ui/heading';
import { Product_Mock } from '@/lib/mocks/mocks';
import { cn } from '@/lib/utils';

export default function PopularCategoryGrid({
  collection,
  className,
}: {
  collection: Product_Mock[];
  className?: string;
}) {
  return (
    <article className={cn('px-4 lg:px-6 max-w-screen-xl mx-auto', className)}>
      <Heading size={'titleSmall'} className="mb-4">
        Alimentos para perro
      </Heading>
      <section className="flex w-full gap-4">
        <section className="w-1/2 hidden flex-col gap-6 lg:flex">
          <div className="w-full h-1/2 bg-gray-200 rounded-lg"></div>
          <div className="w-full h-1/2 bg-gray-200 rounded-lg"></div>
        </section>
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
      </section>
    </article>
  );
}
