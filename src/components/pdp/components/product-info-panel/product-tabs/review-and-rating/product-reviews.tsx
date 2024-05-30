import StarList from '@/components/common/stars-list/stars-list';
import { Button } from '@/components/common/ui/button';
import { Separator } from '@/components/common/ui/separator';

export default function ProductReviews() {
  return (
    <div>
      <h3 className="text-neutral-900 font-semibold text-base my-4">
        Destacadas
      </h3>
      <div>
        {Array.from({ length: 3 }).map((review) => (
          <div className="w-full flex flex-col gap-2">
            <div className="flex justify-between mt-4">
              <StarList size={12} review_rating={4} />
              <span className="text-neutral-500 text-xs">09 ene. 2024</span>
            </div>
            <div className="text-neutral-900 text-sm">
              Se ve de buena calidad. Muy practica.
            </div>
            <Separator />
          </div>
        ))}
      </div>
      <Button className="w-full mt-4" variant={'outline'}>
        Ver todas
      </Button>
    </div>
  );
}
