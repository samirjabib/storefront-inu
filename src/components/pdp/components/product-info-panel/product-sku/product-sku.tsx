import { Region } from '@medusajs/medusa';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

type Props = {
  product: PricedProduct;
  region: Region;
  disabled?: boolean;
};

export default function ProductSku({}: Props) {



  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold">Seleccione su referencia :</h3>
      <div className="flex gap-2">
        <div className="flex text-sm font-medium gap-2 p-4 bg-red-500 max-w-11 max-h-11 justify-center items-center rounded-lg border border-ring bg-transparent drop-shadow cursor-pointer">
          12kg
        </div>
        <div className="flex text-sm font-medium gap-2 p-4 bg-red-500 max-w-11 max-h-11 justify-center items-center rounded-lg border  bg-transparent">
          6kg
        </div>
      </div>
    </div>
  );
}
