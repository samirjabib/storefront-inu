import { collection_mock, Product_Mock } from '@/lib/mocks/mocks';
import ProductCarousel from '../common/product-carousel';
import { Separator } from '@/components/common/ui/separator';

const ProductVitrine = ({ title = 'Lo mas vendido' }: { title: string }) => {
	//add query from server side
	return (
		<section className='px-4 md:px-6 max-w-screen-2xl mx-auto py-16'>
			<div>
				<h2 className='text-2xl font-semibold tracking-tight text-gray-800 mb-4'>
					{title}
				</h2>
			</div>
			<Separator className='mb-4 bg-neutral-200' />
			<ProductCarousel
				collection={collection_mock as unknown as Product_Mock[]}
			/>
		</section>
	);
};

export default ProductVitrine;
