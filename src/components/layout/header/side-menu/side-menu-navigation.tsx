import { getCategoriesList } from '@/lib/actions/category';

export default async function SideMenuNavigation() {
  const { product_categories } = await getCategoriesList(0, 6);

  console.log(product_categories);

  return <div></div>;
}
