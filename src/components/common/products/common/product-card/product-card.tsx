import Image from 'next/image';
import { Product_Mock } from '@/lib/mocks/mocks';
import { cn, shortenProductName } from '@/lib/utils';
import ProductCardPricing from './product-card-pricing';
import LocalizedClientLink from '@/components/common/localized-client-link/localized-client-link';
import { ProductPreviewType } from '@/lib/types/global';

export function ProductCard({
  product,
  containerStyles,
}: {
  product: ProductPreviewType;
  containerStyles?: string;
}) {
  return (
    <LocalizedClientLink href={`/products/${product.handle}`}>
      <article
        className={cn(
          'group bg-white max-w-60 min-w-60 min-h-80 rounded-lg h-[21rem] shadow-sm border border-neutral-100 p-4 relative cursor-pointer',
          containerStyles
        )}
      >
        <header className="flex max-h-48 min-h-48 w-full mb-4 relative">
          <Image
            src={product.thumbnail || ''}
            alt={product.title}
            width={208}
            height={228}
            className="object-contain rounded-lg w-full"
          />
          {product.price?.price_type === 'sale' && (
            <span className="bg-accent-secondary-500 text-sm absolute px-2 text-white rounded-lg">
              -{product.price?.difference}%
            </span>
          )}
        </header>
        <section>
          <h3
            id={`product-name-${product.id}`}
            className="text-sm group-hover:text-primary capitalize"
          >
            {shortenProductName(product.title)}
          </h3>
          <ProductCardPricing product={product} />
        </section>
      </article>
    </LocalizedClientLink>
  );
}
