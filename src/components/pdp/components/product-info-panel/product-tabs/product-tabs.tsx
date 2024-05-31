import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/common/ui/tabs';
import ReviewAndRatings from './review-and-rating/review-and-ratings';
import ProductFaqs from './faqs/product-faqs';

export default function ProductTabs() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="w-full flex items-center justify-around bg-neutral-100">
        <TabsTrigger value="account">⭐ Calificaciones</TabsTrigger>
        <TabsTrigger value="password">❓Preguntas.</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <ReviewAndRatings />
      </TabsContent>
      <TabsContent value="password">
        <ProductFaqs />
      </TabsContent>
    </Tabs>
  );
}
