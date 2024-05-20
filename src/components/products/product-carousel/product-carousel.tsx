import { collection_mock, Product_Mock } from "@/lib/mocks/mocks";
import ProductCarouselUI from "./product-carousel-ui";

const ProductCarousel = () => {
  //add query from server side
  return (
    <div className="px-4 md:px-6 max-w-screen-2xl mx-auto py-16">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-800 mb-4">
        Lo mas vendido
      </h2>
      <ProductCarouselUI
        collection={collection_mock as unknown as Product_Mock[]}
      />
    </div>
  );
};

export default ProductCarousel;
