import Image from "next/image";
import { Product_Mock } from "@/lib/mocks/mocks";
import { cn, shortenProductName } from "@/lib/utils";
import LocalizedClientLink from "@/components/common/localized-client-link/localized-client-link";
import ProductCardSmallPricing from "./product-card-small-pricing";
import { Separator } from "@/components/common/ui/separator";

export function ProductCardSmall({
  product,
  containerStyles,
}: {
  product: Product_Mock;
  containerStyles?: string;
}) {
  return (
    <LocalizedClientLink href={`/products/${product.id}`}>
      <article
        className={cn(
          "group w-full min-h-32 rounded-lg p-4 relative cursor-pointer grid grid-cols-6 gap-x-4",
          containerStyles
        )}
      >
        <header className="w-full relative col-span-2 min-h-32">
          <Image
            src={product.img_url}
            alt={product.product_name}
            width={160}
            height={160}
            className="object-contain rounded-lg w-full"
          />
          {product.has_disccount && (
            <span className="bg-accent-secondary-500 text-sm absolute px-2 text-white rounded-lg  top-0">
              -17%
            </span>
          )}
        </header>
        <section className="col-span-4">
          <h3
            id={`product-name-${product.id}`}
            className="text-sm group-hover:text-brand-500"
          >
            {shortenProductName(product.product_name)}
          </h3>
          <ProductCardSmallPricing product={product} />
        </section>
      </article>
      <Separator />
    </LocalizedClientLink>
  );
}
