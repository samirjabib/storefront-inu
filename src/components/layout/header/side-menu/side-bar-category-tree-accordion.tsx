'use client';
import { ProductCategoryWithChildren } from '@/lib/types/global';
import { cn } from '@/lib/utils';

interface SideBarCategoryTreeAccordionProps {
  category: ProductCategoryWithChildren;
  path: string;
  onSelectCategory: (category: ProductCategoryWithChildren) => void;
}

const SideBarCategoryTreeAccordion: React.FC<
  SideBarCategoryTreeAccordionProps
> = ({ category, path, onSelectCategory }) => {
  if (category.parent_category) {
    return null;
  }

  const hasChildren =
    category.category_children && category.category_children.length > 0;
  const currentPath = `${path}/${category.handle}`;

  const handleCategoryClick = () => {
    if (hasChildren) {
      onSelectCategory(category);
    }
  };

  return (
    <div key={category.id} className="ml-3">
      {hasChildren ? (
        <div
          onClick={handleCategoryClick}
          className={cn(
            'capitalize text-sm text-primary-foreground/80 cursor-pointer'
          )}
        >
          {category.name}
        </div>
      ) : (
        <a
          href={currentPath}
          className="capitalize text-sm text-primary-foreground/80"
          data-testid="category-link"
        >
          {category.name}
        </a>
      )}
    </div>
  );
};

export default SideBarCategoryTreeAccordion;
