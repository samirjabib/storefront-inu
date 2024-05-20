import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/common/ui/carousel';
import { Product_Mock } from '@/lib/mocks/mocks';
import { ProductCard } from './product-card/product-card';

export default function ProductCarousel({
	collection,
}: {
	collection: Product_Mock[];
}) {
	return (
		<Carousel
			opts={{
				align: 'start',
			}}
		>
			<CarouselContent>
				{collection.map(product => (
					<CarouselItem className='basis-auto' key={product.id}>
						<ProductCard product={product} />
					</CarouselItem>
				))}
			</CarouselContent>
			{/* 			<CarouselPrevious />
			<CarouselNext /> */}
		</Carousel>
	);
}
