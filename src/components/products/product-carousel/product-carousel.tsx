import { collection_mock, Product_Mock } from '@/lib/mocks/mocks';
import ProductCarouselUI from './product-carousel-ui';

const ProductCarousel = ({ title = 'Lo mas vendido' }: { title: string }) => {
	//add query from server side
	return (
		<section className='px-4 md:px-6 max-w-screen-2xl mx-auto py-16'>
			<div>
				<h2 className='text-2xl font-semibold tracking-tight text-gray-800 mb-4'>
					{title}
				</h2>
			</div>
			<ProductCarouselUI
				collection={collection_mock as unknown as Product_Mock[]}
			/>
		</section>
	);
};

export default ProductCarousel;
