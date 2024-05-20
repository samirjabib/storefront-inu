import { Product_Mock } from '@/lib/mocks/mocks';
import { ProductCard } from '../common/product-card/product-card';

export default function ProductList({
	products,
}: {
	products: Product_Mock[];
}) {
	return (
		<section className='p-2 rounded-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:px-4'>
			{products.map((product: Product_Mock) => {
				return <ProductCard product={product} />;
			})}
		</section>
	);
}
