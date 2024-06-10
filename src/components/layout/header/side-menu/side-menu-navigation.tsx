import { getCategories } from '@/lib/actions/categories';
import SideBarCategoryTreeAccordion from './side-bar-category-tree-accordion';

export default async function SideMenuNavigation() {
  const { product_categories } = await getCategories(0, 6);

  if (product_categories && product_categories.length > 0) {
    return (
      <div>
        {product_categories.map((category) => {
          // Si la categoría tiene una categoría padre, retornar null
          if (category.parent_category) {
            return null;
          }

          // Renderizar la categoría raíz y sus subcategorías
          return (
            <SideBarCategoryTreeAccordion
              key={category.id}
              category={category}
              path="/categories"
            />
          );
        })}
      </div>
    );
  }

  return null;
}

// Retornar null si no hay categorías

//   product_categories && product_categories?.length > 0 && (
//     <div className="flex flex-col gap-y-2">
//       <span className="txt-small-plus txt-ui-fg-base">Categories</span>
//       <ul className="grid grid-cols-1 gap-2" data-testid="footer-categories">
//         {product_categories?.slice(0, 6).map((c) => {
//           if (c.parent_category) {
//             return;
//           }

//           const children =
//             c.category_children?.map((child) => ({
//               name: child.name,
//               handle: child.handle,
//               id: child.id,
//             })) || null;

//           return (
//             <li
//               className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
//               key={c.id}
//             >
//               <LocalizedClientLink
//                 className={clx(
//                   'hover:text-ui-fg-base',
//                   children && 'txt-small-plus'
//                 )}
//                 href={`/categories/${c.handle}`}
//                 data-testid="category-link"
//               >
//                 {c.name}
//               </LocalizedClientLink>
//               {children && (
//                 <ul className="grid grid-cols-1 ml-3 gap-2">
//                   {children &&
//                     children.map((child) => (
//                       <li key={child.id}>
//                         <LocalizedClientLink
//                           className="hover:text-ui-fg-base"
//                           href={`/categories/${child.handle}`}
//                           data-testid="category-link"
//                         >
//                           {child.name}
//                         </LocalizedClientLink>
//                       </li>
//                     ))}
//                 </ul>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
