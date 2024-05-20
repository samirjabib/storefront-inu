import Image from 'next/image';
import { Product_Mock } from '@/lib/mocks/mocks';
import { shortenProductName } from '@/lib/utils';

export function ProductCard({ product }: { product: Product_Mock }) {
	return (
		<article className='bg-white max-w-60 min-w-60 min-h-80 rounded-lg h-72 shadow-sm border border-neutral-100 p-4 relative'>
			<div className='flex max-h-48 min-h-48 w-full'>
				<Image
					src={product.img_url}
					alt={product.product_name}
					width={208}
					height={228}
					className='object-contain rounded-lg w-full'
				/>
			</div>
			<h3 className='text-sm'>{shortenProductName(product.product_name)}</h3>
		</article>
	);
}
