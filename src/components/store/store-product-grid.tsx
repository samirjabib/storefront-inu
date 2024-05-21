import { Product_Mock } from "@/lib/mocks/mocks";
import { ProductCard } from "../common/products/common/product-card/product-card";
import { ProductCardSmall } from "../common/products/common/product-card-small/product-card-small";

export default function StoreProductGrid({
  products,
}: {
  products: Product_Mock[];
}) {
  return (
    <div className="px-4 md:px-6 py-4 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 gap-y-4 bg-white rounded-lg border border-gray-200">
        {products.map((product: Product_Mock) => {
          return (
            <ProductCardSmall product={product} containerStyles="w-full" />
          );
        })}
      </div>
    </div>
  );
}