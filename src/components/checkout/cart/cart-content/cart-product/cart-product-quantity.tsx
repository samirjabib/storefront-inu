'use client';

import { CircleMinus, CirclePlus, Trash2 } from 'lucide-react';

export default function CartProductQuantity() {
  const quantity = 1;
  return (
    <div className="flex gap-2 border max-w-32 rounded-full justify-between py-1 px-2 mt-2">
      <button>
        {quantity === 1 ? (
          <Trash2 size={20} className="text-muted-foreground" />
        ) : (
          <CircleMinus size={20} className="text-muted-foreground" />
        )}
      </button>
      <span className="text-base">{quantity}</span>
      <button>
        <CirclePlus size={20} className="text-primary" />
      </button>
    </div>
  );
}
