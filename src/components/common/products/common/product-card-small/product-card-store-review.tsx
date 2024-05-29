import { Star } from "lucide-react";

export default function ProductReviewStore({
  review_rating,
}: {
  review_rating: number;
}) {
  const review_number_rounded = Math.round(review_rating);
  const stars = Array.from({ length: 5 }, (_, index) => {
    const isFilled = index < review_number_rounded;
    return (
      <Star
        key={index}
        size={12}
        className={
          isFilled ? "fill-yellow-500 text-yellow-600" : "text-zinc-300"
        }
      />
    );
  });

  return (
    <div className="flex w-full gap-2 items-center cursor-pointer">
      <span className="text-xs text-neutral-500 ">({review_rating})</span>
      <span className="flex gap-px">{stars}</span>
    </div>
  );
}
