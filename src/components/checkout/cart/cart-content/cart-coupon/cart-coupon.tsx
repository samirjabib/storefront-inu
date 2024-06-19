import { Button } from '@/components/common/ui/button';
import { Input } from '@/components/common/ui/input';

export default function CartCoupon() {
  return (
    <div className="bg-neutral-200 rounded-lg flex gap-2 items-center p-4 mb-4">
      <Input className="py-5 px-2" placeholder="Cupón de descuento" />
      <Button>Aplicar</Button>
    </div>
  );
}
