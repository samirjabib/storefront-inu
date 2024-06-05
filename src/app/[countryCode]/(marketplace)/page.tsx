import Banner from '@/components/common/banner/banner';
import { dummieData } from '@/components/common/banner/data';
import ProductVitrine from '@/components/common/products/product-vitrine/product-vitrine';
import BannerGrid from '@/components/home/banner-grid/banner-grid';
import FlashSalesGrid from '@/components/home/flash-sales-grid/flash-sales-grid';
import PopularCategoryGrid from '@/components/home/popular-category/popular-cateogry';
import Promises from '@/components/common/promises/promises';
import WelcomeHome from '@/components/home/welcome/welcome-home';
import { collection_mock, Product_Mock } from '@/lib/mocks/mocks';
import PetCarouselCategories from '@/components/common/pets-categories/pets-categories';
import { CarouselCategories } from '@/components/common/filter-categories/carousel-categories';

export default function Home() {
  return (
    <main className="bg-neutral-100">
      <CarouselCategories className="py-6 px-4 md:px-6" />
      <Banner data={dummieData} />
      <WelcomeHome className="py-10" />
      <Promises classNameContainer="pb-10" />
      <ProductVitrine title="Lo mas vendido" className="pb-16" />
      <BannerGrid className="pb-16" />
      <PetCarouselCategories className="pb-16" />
      <FlashSalesGrid
        collection={collection_mock as unknown as Product_Mock[]}
        className="pb-16"
      />
      <ProductVitrine title="Lo nuevo" className="pb-16" />
      <Banner data={dummieData} className="pb-16" />
      <PopularCategoryGrid
        className="pb-16"
        collection={collection_mock as unknown as Product_Mock[]}
      />

      <ProductVitrine title="Mas vendido de medicina" className="" />
      <CarouselCategories className="py-6 px-4 md:px-6" />
      <Promises classNameContainer="pb-16" />
    </main>
  );
}
