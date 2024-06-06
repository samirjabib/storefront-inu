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
import { getCollectionsWithProducts } from '@/lib/data/collections';

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string };
}) {
  console.log(countryCode);
  const collections = await getCollectionsWithProducts(countryCode);

  return (
    <main className="bg-neutral-100">
      <Banner data={dummieData} className="py-10" />
      <WelcomeHome className="pb-10" />
      <ProductVitrine title="Lo mas vendido" className="pb-16" />
      <PetCarouselCategories className="pb-16" />
      <BannerGrid className="pb-16" />
      <ProductVitrine title="Lo nuevo" className="pb-6" />
      <Promises classNameContainer="py-12" />
      <CarouselCategories className="pb-12 px-4 md:px-6" />
    </main>
  );
}
