import Banner from '@/components/common/banner/banner';
import { dummieData } from '@/components/common/banner/data';
import BannerGrid from '@/components/home/banner-grid/banner-grid';
import FilterCategories from '@/components/home/filter-categories/filter-categories';
import ProductCarousel from '@/components/products/product-carousel/product-carousel';

export default function Home() {
	return (
		<main className='bg-neutral-100'>
			<FilterCategories />
			<Banner data={dummieData} />
			<ProductCarousel title='Lo mas vendido' />
			<BannerGrid />
		</main>
	);
}
