import CartContent from '@/components/checkout/cart/cart-content';
import CardHeader from '@/components/checkout/cart/cart-header/cart-header';
import CartIsEmpty from '@/components/checkout/cart/cart-is-empty';

export default function Cart() {
  const products = null;
  return (
    <main className="min-h-screen">
      <CardHeader />
      {!products ? <CartIsEmpty /> : <CartContent />}
    </main>
  );
}
