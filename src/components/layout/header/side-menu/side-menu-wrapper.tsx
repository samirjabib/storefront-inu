import { getCategories } from '@/lib/actions/categories';
import SideMenu from './side-menu';
import SideMenuNavigation from './side-menu-navigation';

export default async function SideMenuWrapper() {
  const { product_categories } = await getCategories(0, 6);

  return (
    <SideMenu>
      <SideMenuNavigation product_categories={product_categories} />
    </SideMenu>
  );
}
