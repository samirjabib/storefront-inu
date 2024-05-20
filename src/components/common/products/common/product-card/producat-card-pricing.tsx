import { Product_Mock } from '@/lib/mocks/mocks';

export default function ProductCardPricing({
	product,
}: {
	product: Product_Mock;
}) {
	if (product.has_disccount && product.price_with_disccount) {
		return (
			<div className='flex flex-col mt-2'>
				<p className='text-xs text-gray-300 line-through'>$ {product.price}</p>
				<p className='text-lg text-neutral-900 font-medium'>
					$ {product.price_with_disccount}
				</p>
			</div>
		);
	}

	if (product.free_delivery)
		return (
			<div className='flex gap-4 items-center mt-4'>
				<p className='text-lg text-neutral-900 font-semibold '>
					$ {product.price}
				</p>
				<span className='text-xs text-accent-terciary-500 font-normal'>
					Envío gratis!
				</span>
			</div>
		);
	return (
		<p className='text-lg text-neutral-900 font-semibold mt-4'>
			$ {product.price}
		</p>
	);
}
