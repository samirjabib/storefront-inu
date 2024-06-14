'use client';
// Importar los módulos necesarios
import React, { useState, useEffect } from 'react';
import { getCategories } from '@/lib/actions/categories';
import SideBarCategoryTreeAccordion from './side-bar-category-tree-accordion';
import { ProductCategoryWithChildren } from '@/lib/types/global';

// Definir el componente
const SideMenuNavigation = ({
  product_categories,
}: {
  product_categories: ProductCategoryWithChildren[];
}) => {
  // Definir los tipos de estado
  const [categories, setCategories] = useState<ProductCategoryWithChildren[]>(
    []
  );

  const [currentCategory, setCurrentCategory] =
    useState<ProductCategoryWithChildren | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Cargar las categorías al montar el componente
  useEffect(() => {
    const fetchCategories = async () => {
      setCategories(product_categories);
      setLoading(false);
    };

    fetchCategories();
  }, []);

  // Función para manejar la selección de una categoría
  const handleSelectCategory = (category: ProductCategoryWithChildren) => {
    setCurrentCategory(category);
  };

  // Determinar qué categorías mostrar en el sidebar
  const categoriesToDisplay = currentCategory
    ? currentCategory.category_children
    : categories;

  return (
    <div>
      {loading && <p>Loading categories...</p>}
      {currentCategory && (
        <button
          onClick={() => setCurrentCategory(null)}
          className="capitalize text-sm text-primary-foreground/80 cursor-pointer mb-2"
        >
          Volver
        </button>
      )}
      {categoriesToDisplay && categoriesToDisplay.length > 0
        ? categoriesToDisplay.map((category) => (
            <SideBarCategoryTreeAccordion
              key={category.id}
              category={category}
              path="/categories"
              onSelectCategory={handleSelectCategory}
            />
          ))
        : !loading && <p>No hay categorías disponibles.</p>}
    </div>
  );
};

export default SideMenuNavigation;
