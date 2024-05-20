import { ProductCard } from '@/components/common/products/common/product-card/product-card';
import { Product_Mock } from '@/lib/mocks/mocks';

export default function FlashSalesGrid({
	collection,
}: {
	collection: Product_Mock[];
}) {
	return (
		<article className='px-4 lg:px-6 max-w-screen-2xl mx-auto'>
			<h2 className='text-2xl font-semibold tracking-tight text-gray-800 mb-4'>
				⚡Ventas Flash
			</h2>
			<section className='flex w-full gap-4'>
				<div className='grid grid-cols-1 lg:grid-cols-2 w-full lg:w-1/2 bg-brand-100 p-6 rounded-lg gap-6 '>
					{collection.slice(0, 4).map(product => (
						<ProductCard
							containerStyles='max-w-full'
							product={product}
							key={product.id}
						/>
					))}
				</div>
				<section className='w-1/2 flex flex-col gap-6'>
					<div className='w-full h-1/2 bg-gray-200 rounded-lg'></div>
					<div className='w-full h-1/2 bg-gray-200 rounded-lg'></div>
				</section>
			</section>
		</article>
	);
}
