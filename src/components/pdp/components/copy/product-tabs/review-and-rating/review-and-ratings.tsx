import ProductReview from '../../product-review';
import ProductReviews from './product-reviews';
import ProductRating from './product-rating';
import ReviewWithPhotos from './reviews-with-photos';

export default function ReviewAndRatings() {
  return (
    <div className="flex flex-col">
      <ProductRating review_rating={4.9} />
      <ReviewWithPhotos />
      <ProductReviews />
    </div>
  );
}
