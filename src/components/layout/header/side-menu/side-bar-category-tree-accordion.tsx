'use client';
import LocalizedClientLink from '@/components/common/localized-client-link/localized-client-link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/common/ui/accordion';
import { ProductCategoryWithChildren } from '@/lib/types/global';
import { cn } from '@/lib/utils';

const SideBarCategoryTreeAccordion = ({
  category,
  path,
}: {
  category: ProductCategoryWithChildren;
  path: string;
}) => {
  if (!category) return null;

  const hasChildren =
    category.category_children && category.category_children.length > 0;

  const currentPath = `${path}/${category.handle}`;

  return (
    <div key={category.id} className="ml-3">
      {hasChildren ? (
        <Accordion type="single" collapsible>
          <AccordionItem value={`item-${category.id}`}>
            <AccordionTrigger className={cn('capitalize')}>
              {category.name}
            </AccordionTrigger>
            <AccordionContent>
              {category.category_children.map((child) => (
                <SideBarCategoryTreeAccordion
                  key={child.id}
                  category={child}
                  path={currentPath}
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <LocalizedClientLink
          className="hover:text-ui-fg-base"
          href={`${currentPath}`}
          data-testid="category-link"
        >
          {category.name}
        </LocalizedClientLink>
      )}
    </div>
  );
};

export default SideBarCategoryTreeAccordion;
