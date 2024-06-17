'use client';
import React from 'react';
import SideBarCategoryTreeAccordion from './side-bar-category-tree-accordion';
import { ProductCategoryWithChildren } from '@/lib/types/global';
import { ChevronLeft } from 'lucide-react';
import useMenuCategories from '../hooks/useMenuCategories';

const SideMenuNavigation = ({
  product_categories,
}: {
  product_categories: ProductCategoryWithChildren[];
}) => {
  const {
    categoriesToDisplay,
    handleBack,
    handleSelectCategory,
    currentCategory,
  } = useMenuCategories({ product_categories });

  return (
    <div>
      {currentCategory && (
        <div className="py-4 border-b w-full" onClick={handleBack}>
          <button className="capitalize text-sm text-primary-foreground/80 cursor-pointer flex flex-row items-center gap-x-1">
            <ChevronLeft className="text-black opacity-60" size={24} />
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
