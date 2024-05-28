import { ProductPaymentMethodsDesktop } from './product-payment-methods-desktop';
import ProductPaymentMethodsMobile from './product-payment-methods-mobile';

export default function ProductPaymentMethods() {
	const desktop = true;
	if (desktop) {
		return <ProductPaymentMethodsDesktop />;
	}
	return <ProductPaymentMethodsMobile />;
}
