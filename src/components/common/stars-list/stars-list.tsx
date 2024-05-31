import { Star } from 'lucide-react';

export default function StarList({
  review_rating,
  size,
}: {
  review_rating: number;
  size: number;
}) {
  const review_number_rounded = Math.round(review_rating);
  const stars = Array.from({ length: 5 }, (_, index) => {
    const isFilled = index < review_number_rounded;
    return (
      <Star
        key={index}
        size={size}
        className={
          isFilled ? 'fill-yellow-500 text-yellow-600' : 'text-zinc-300'
        }
      />
    );
  });

  return <span className="flex gap-px">{stars}</span>;
}
