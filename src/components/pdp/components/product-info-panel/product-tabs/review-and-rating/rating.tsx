import { ChevronRight, Star } from 'lucide-react';

export default function Rating({ review_rating }: { review_rating: number }) {
  const review_number_rounded = Math.round(review_rating);
  const stars = Array.from({ length: 5 }, (_, index) => {
    const isFilled = index < review_number_rounded;
    return (
      <Star
        key={index}
        size={24}
        className={
          isFilled ? 'fill-yellow-500 text-yellow-600' : 'text-zinc-300'
        }
      />
    );
  });

  return (
    <div className="flex w-full gap-2 items-center cursor-pointer my-4">
      <span className="text-3xl font-semibold text-neutral-900 ">
        {review_rating}
      </span>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <span className="flex gap-px">{stars}</span>
          <span className="text-neutral-500">46 comentarios</span>
        </div>
        <div>
          <ChevronRight size={36} />
        </div>
      </div>
    </div>
  );
}
