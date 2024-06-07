import StarList from '@/components/common/stars-list/stars-list';
import { ChevronRight, Star } from 'lucide-react';

export default function ProductRating({
  review_rating,
}: {
  review_rating: number;
}) {
  return (
    <div className="flex w-full gap-2 items-center cursor-pointer my-4">
      <span className="text-3xl font-semibold text-neutral-900 ">
        {review_rating}
      </span>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <StarList size={24} review_rating={review_rating} />
          <span className="text-neutral-500">46 comentarios</span>
        </div>
        <div>
          <ChevronRight size={36} />
        </div>
      </div>
    </div>
  );
}
