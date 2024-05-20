import Image from 'next/image';
import { Product_Mock } from '@/lib/mocks/mocks';
import { shortenProductName } from '@/lib/utils';
import ProductCardPricing from './producat-card-pricing';

export function ProductCard({ product }: { product: Product_Mock }) {
	return (
		<article className='group bg-white max-w-60 min-w-60 min-h-80 rounded-lg h-[21rem] shadow-sm border border-neutral-100 p-4 relative cursor-pointer'>
			<header className='flex max-h-48 min-h-48 w-full mb-4'>
				<Image
					src={product.img_url}
					alt={product.product_name}
					width={208}
					height={228}
					className='object-contain rounded-lg w-full'
				/>
			</header>
			<div></div>
			<section>
				<h3
					id={`product-name-${product.id}`}
					className='text-sm group-hover:text-brand-500'
				>
					{shortenProductName(product.product_name)}
				</h3>
				<ProductCardPricing product={product} />
			</section>
		</article>
	);
}
