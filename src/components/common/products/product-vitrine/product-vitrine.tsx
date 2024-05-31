import { collection_mock, Product_Mock } from '@/lib/mocks/mocks';
import ProductCarousel from '../common/product-carousel';
import { Separator } from '@/components/common/ui/separator';
import { cn } from '@/lib/utils';
import Heading from '../../ui/heading';

const ProductVitrine = ({
  title = 'Lo mas vendido',
  className,
}: {
  title: string;
  className?: string;
}) => {
  //add query from server side
  return (
    <section className={cn('px-4 md:px-6 max-w-screen-xl mx-auto', className)}>
      <div>
        <Heading size={'titleSmall'} as="h2" className="mb-4">
          {title}
        </Heading>
      </div>
      <Separator className="mb-4 bg-neutral-200" />
      <ProductCarousel
        collection={collection_mock as unknown as Product_Mock[]}
      />
    </section>
  );
};

export default ProductVitrine;
