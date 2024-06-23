import LocalizedClientLink from '@/components/common/localized-client-link/localized-client-link';
import { Home as HomeIcon, Search, UserRound, PawPrint } from 'lucide-react';

const categories = [
  { icon: HomeIcon, label: 'Inicio' },
  { icon: Search, label: 'Buscar' },
  { icon: PawPrint, label: 'Categorías' },
  { icon: UserRound, label: 'Iniciar sesión' },
];

export default function Tabs() {
  return (
    <div className="fixed md:hidden bottom-0 left-0 w-full bg-neutral-100 flex flex-row justify-between p-4 shadow-lg border-t border-neutral-300 z-40">
      {categories.map((item) => (
        <LocalizedClientLink
          href={'/account'}
          key={item.label}
          className="items-center flex flex-col justify-center cursor-pointer"
        >
          <item.icon className="text-neutral-500" size={20} />
          <h3 className="text-neutral-500 text-xs transition-colors duration-200 hover:text-brand-700 mt-1">
            {item.label}
          </h3>
        </LocalizedClientLink>
      ))}
    </div>
  );
}
