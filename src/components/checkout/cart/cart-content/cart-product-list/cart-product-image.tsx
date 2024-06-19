import { Product_Mock } from '@/lib/mocks/mocks';
import Image from 'next/image';

export default function CartProductImage({
  product,
}: {
  product: Product_Mock;
}) {
  return (
    <div className="w-full relative col-span-2 min-h-10 min-w-10">
      <Image
        src={product.img_url}
        alt={product.product_name}
        fill
        className="object-contain rounded-lg w-full"
      />
      {product.has_disccount && (
        <span className="bg-accent-secondary-500 text-xs md:text-sm absolute px-2 text-white rounded-lg top-4 right-0">
          -17%
        </span>
      )}
    </div>
  );
}
