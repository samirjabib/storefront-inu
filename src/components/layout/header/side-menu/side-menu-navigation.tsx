'use client';
import React, { useState, useEffect } from 'react';
import SideBarCategoryTreeAccordion from './side-bar-category-tree-accordion';
import { ProductCategoryWithChildren } from '@/lib/types/global';

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

  useEffect(() => {
    setCategories(product_categories);
  }, [product_categories]);

  const handleSelectCategory = (category: ProductCategoryWithChildren) => {
    setCurrentCategory(category);
  };

  const categoriesToDisplay = currentCategory
    ? currentCategory.category_children
    : categories;

  return (
    <div>
      {currentCategory && (
        <button
          onClick={() => setCurrentCategory(null)}
          className="capitalize text-sm text-primary-foreground/80 cursor-pointer mb-2"
        >
          Volver
        </button>
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
