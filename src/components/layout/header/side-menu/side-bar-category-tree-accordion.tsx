'use client';
import LocalizedClientLink from '@/components/common/localized-client-link/localized-client-link';
import { ProductCategoryWithChildren } from '@/lib/types/global';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

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
    <div key={category.id} className="border-b py-4">
      {hasChildren ? (
        <div
          onClick={handleCategoryClick}
          className={cn('flex flex-row items-center justify-between')}
        >
          <h3 className="capitalize text-sm text-primary-foreground/80 cursor-pointer">
            {category.name}
          </h3>
          <ChevronRight className="text-black/60" />
        </div>
      ) : (
        <LocalizedClientLink
          href={currentPath}
          className="capitalize text-sm text-primary-foreground/80"
          data-testid="category-link"
        >
          {category.name}
        </LocalizedClientLink>
      )}
    </div>
  );
};

export default SideBarCategoryTreeAccordion;
