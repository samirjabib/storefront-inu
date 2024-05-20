import Banner from '@/components/common/banner/banner';
import { dummieData } from '@/components/common/banner/data';
import BannerGrid from '@/components/home/banner-grid/banner-grid';
import FilterCategories from '@/components/home/filter-categories/filter-categories';
import FlashSalesGrid from '@/components/products/flash-sales-grid/flash-sales-grid';
import ProductCarousel from '@/components/products/product-carousel/product-carousel';
import { collection_mock, Product_Mock } from '@/lib/mocks/mocks';

export default function Home() {
	return (
		<main className='bg-neutral-100'>
			<FilterCategories />
			<Banner data={dummieData} />
			<ProductCarousel title='Lo mas vendido' />
			<BannerGrid />
			<FlashSalesGrid
				collection={collection_mock as unknown as Product_Mock[]}
			/>
		</main>
	);
}
