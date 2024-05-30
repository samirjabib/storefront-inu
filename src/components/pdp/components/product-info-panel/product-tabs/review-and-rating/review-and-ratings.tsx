import Rating from './rating';
import ReviewWithPhotos from './reviews-with-photos';

export default function ReviewAndRatings() {
  return (
    <div className="flex flex-col">
      <Rating review_rating={4.9} />
      <ReviewWithPhotos />
    </div>
  );
}
