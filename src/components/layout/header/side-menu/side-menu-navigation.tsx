'use client';
import React, { useState, useEffect } from 'react';
import SideBarCategoryTreeAccordion from './side-bar-category-tree-accordion';
import { ProductCategoryWithChildren } from '@/lib/types/global';
import { ArrowLeft } from 'lucide-react';

const SideMenuNavigation = ({
  product_categories,
}: {
  product_categories: ProductCategoryWithChildren[];
}) => {
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

  return (
    <div>
      {currentCategory && (
        <div className="py-4 border-b w-full" onClick={handleBack}>
          <button className="capitalize text-sm text-primary-foreground/80 cursor-pointer flex flex-row items-center gap-x-1">
            <ArrowLeft className="text-black opacity-60" />
            Volver
          </button>
        </div>
      )}
      {categoriesToDisplay && categoriesToDisplay.length > 0 ? (
        categoriesToDisplay.map((category) => (
          <SideBarCategoryTreeAccordion
            key={category.id}
            category={category}
            path="/categories"
            onSelectCategory={handleSelectCategory}
          />
        ))
      ) : (
        <p>No hay categorías disponibles.</p>
      )}
    </div>
  );
};

export default SideMenuNavigation;
