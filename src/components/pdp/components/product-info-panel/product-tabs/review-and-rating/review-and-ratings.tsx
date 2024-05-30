import Rating from './rating';

export default function ReviewAndRatings() {
  return (
    <div className="flex flex-col">
      <Rating review_rating={4.9} />
    </div>
  );
}
