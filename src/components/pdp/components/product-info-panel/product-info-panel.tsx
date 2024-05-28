import { collection_mock, Product_Mock } from '@/lib/mocks/mocks';
import ProductInfoPanelHeader from './product-info-panel-header';
import ProductName from './product-name';
import ProductPricing from './product-pricing';
import ProductReview from './product-review';
import ProductPaymentMethods from './product-payment-methods/product-payment-methods';
import ProductPayWithAddi from './product-pay-with-addi';
import ProductBuyNow from './product-buy-now';
import ProductAddToCart from './product-add-to-cart';

export default function ProductImgGallery() {
	return (
		<section className='flex flex-col w-full lg:w-1/2 bg-white  rounded-lg shadow-sm p-4 gap-2 lg:p-6'>
			<ProductInfoPanelHeader />
			<ProductName />
			<ProductReview review_rating={4.5} />
			<ProductPricing product={collection_mock[4] as unknown as Product_Mock} />
			<ProductPayWithAddi />
			<ProductPaymentMethods />
			<div className='w-full flex flex-col gap-2'>
				<ProductBuyNow />
				<ProductAddToCart />
			</div>
		</section>
	);
}
