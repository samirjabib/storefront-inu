import { ProductCategoryWithChildren } from '@/lib/types/global';
import { useEffect, useState } from 'react';

export default function useMenuCategories({
  product_categories,
}: {
  product_categories: ProductCategoryWithChildren[];
}) {
  const [categories, setCategories] = useState<ProductCategoryWithChildren[]>(
    []
  );

  const [currentCategory, setCurrentCategory] =
    useState<ProductCategoryWithChildren | null>(null);
  const [categoryStack, setCategoryStack] = useState<
    ProductCategoryWithChildren[]
  >([]);

  useEffect(() => {
    setCategories(product_categories);
  }, [product_categories]);

  const handleSelectCategory = (category: ProductCategoryWithChildren) => {
    if (currentCategory) {
      setCategoryStack([...categoryStack, currentCategory]);
    }
    setCurrentCategory(category);
  };

  const handleBack = () => {
    const newStack = [...categoryStack];
    const previousCategory = newStack.pop() || null;
    setCategoryStack(newStack);
    setCurrentCategory(previousCategory);
  };

  const categoriesToDisplay = currentCategory
    ? currentCategory.category_children
    : categories;

  return {
    handleSelectCategory,
    handleBack,
    categoriesToDisplay,
    currentCategory,
  };
}
