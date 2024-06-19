'use client';
import { Button } from '@/components/common/ui/button';

export default function CartActions() {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <Button>Ir a pagar</Button>
      <Button variant={'outline'}>Seguir comprando</Button>
      <Button variant={'link'} className="text-foreground">
        Vaciar carro
      </Button>
    </div>
  );
}
