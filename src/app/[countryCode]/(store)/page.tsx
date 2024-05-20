import Banner from '@/components/common/banner/banner';
import { dummieData } from '@/components/common/banner/data';
import ProductVitrine from '@/components/common/products/product-vitrine/product-vitrine';
import BannerGrid from '@/components/home/banner-grid/banner-grid';
import FilterCategories from '@/components/home/filter-categories/filter-categories';
import FlashSalesGrid from '@/components/home/flash-sales-grid/flash-sales-grid';
import WelcomeHome from '@/components/home/welcome/welcome-home';
import { collection_mock, Product_Mock } from '@/lib/mocks/mocks';

export default function Home() {
	return (
		<main className='bg-neutral-100'>
			<FilterCategories />
			<Banner data={dummieData} />
			<WelcomeHome />
			<ProductVitrine title='Lo mas vendido' />
			<BannerGrid />
			<FlashSalesGrid
				collection={collection_mock as unknown as Product_Mock[]}
			/>
		</main>
	);
}
