import { Product_Mock } from '@/lib/mocks/mocks';
import { ProductCardSmall } from '../../common/products/common/product-card-small/product-card-small';
import { isMobileViewport } from '@/lib/utils';
import { ProductCard } from '../../common/products/common/product-card/product-card';

export default function SellerProductGridMobile({
  collection,
}: {
  collection: Product_Mock[];
}) {
  return (
    <article>
      <section className="flex w-full gap-4 md:hidden">
        <div className=" p-4 md:rounded-lg flex flex-col w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full bg-white rounded-lg border border-gray-200">
            {collection.map((product) => {
              return (
                <ProductCardSmall
                  key={product.id}
                  product={product}
                  containerStyles="w-full"
                />
              );
            })}
          </div>
        </div>
      </section>
    </article>
  );
}
