import CartContent from '@/components/checkout/cart/cart-content/cart-content';
import CardHeader from '@/components/checkout/cart/cart-header/cart-header';
import CartIsEmpty from '@/components/checkout/cart/cart-is-empty';
import { collection_mock, Product_Mock } from '@/lib/mocks/mocks';

export default function Cart() {
  const products = 2;
  return (
    <main className="min-h-screen">
      <CardHeader />
      {!products ? (
        <CartIsEmpty />
      ) : (
        <CartContent
          collection={collection_mock as unknown as Product_Mock[]}
        />
      )}
    </main>
  );
}
