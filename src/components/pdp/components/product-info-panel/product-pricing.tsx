import { Product_Mock } from '@/lib/mocks/mocks';

export default function ProductPricing({ product }: { product: Product_Mock }) {
	if (product.has_disccount && product.price_with_disccount) {
		return (
			<div className='flex mt-2 gap-2 flex-col lg:flex-row lg:items-center lg:gap-4 mb-4 lg:align-baseline '>
				<p className='text-base text-gray-300 line-through'>
					$ {product.price}
				</p>
				<div className='flex items-center gap-4'>
					<p className='text-2xl text-neutral-900 font-semibold'>
						$ {product.price_with_disccount}
					</p>
					{product.has_disccount && (
						<span className='bg-accent-secondary-500 text-xs px-2 py-1 text-white rounded-full'>
							-17% OFF
						</span>
					)}
				</div>
			</div>
		);
	}

	if (product.free_delivery)
		return (
			<div className='flex gap-4 items-center mt-4 mb-4'>
				<p className='text-lg text-neutral-900 font-semibold '>
					$ {product.price}
				</p>
				<span className='text-xs text-accent-terciary-500 font-normal'>
					Envío gratis!
				</span>
			</div>
		);

	return (
		<div className='flex mb-4'>
			<p className='text-lg text-neutral-900 font-semibold '>
				$ {product.price}
			</p>
		</div>
	);
}
