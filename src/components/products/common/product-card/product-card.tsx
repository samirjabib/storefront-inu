import Image from 'next/image';
import { Product_Mock } from '@/lib/mocks/mocks';
import { cn, shortenProductName } from '@/lib/utils';
import ProductCardPricing from './producat-card-pricing';

export function ProductCard({
	product,
	containerStyles,
}: {
	product: Product_Mock;
	containerStyles?: string;
}) {
	return (
		<article
			className={cn(
				'group bg-white max-w-60 min-w-60 min-h-80 rounded-lg h-[21rem] shadow-sm border border-neutral-100 p-4 relative cursor-pointer',
				containerStyles
			)}
		>
			<header className='flex max-h-48 min-h-48 w-full mb-4 relative'>
				<Image
					src={product.img_url}
					alt={product.product_name}
					width={208}
					height={228}
					className='object-contain rounded-lg w-full'
				/>
				{product.has_disccount && (
					<span className='bg-accent-secondary-500 text-sm absolute px-2 text-white rounded-lg'>
						-17%
					</span>
				)}
			</header>
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
