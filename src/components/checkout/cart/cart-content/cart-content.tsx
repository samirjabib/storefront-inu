import { Separator } from '@/components/common/ui/separator';
import CartCoupon from './cart-coupon/cart-coupon';
import OrderSummary from './order-summary/order-summary';
import CartActions from './cart-actions/cart-actions';
import CartProductList from './cart-product-list/cart-product-list';
import { collection_mock, Product_Mock } from '@/lib/mocks/mocks';

export default function CartContent() {
  return (
    <div className="p-4 lg:px-6">
      <h1 className="text-foreground text-2xl mb-4 font-bold">Mi carrito</h1>
      <div className="flex w-full flex-col lg:flex-row lg:justify-between lg:gap-8">
        <CartProductList
          collection={collection_mock as unknown as Product_Mock[]}
        />
        <Separator className="mb-4 lg:hidden" />
        <div className="flex flex-col w-full lg:max-w-96 ">
          <CartCoupon />
          <OrderSummary />
          <CartActions />
          <Separator />
        </div>
      </div>
    </div>
  );
}
