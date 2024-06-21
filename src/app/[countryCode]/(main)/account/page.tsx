import AccountLink from '@/components/account/account-link';
import {
  CircleUser,
  CreditCard,
  Heart,
  LogOut,
  MapPin,
  Package,
} from 'lucide-react';
import Link from 'next/link';

export default async function AccountPage({
  params: { countryCode },
}: {
  params: { countryCode: string };
}) {
  const links = [
    { href: '/', icon: CircleUser, label: 'Mi Perfil' },
    { href: '/', icon: Package, label: 'Mis Pedidos' },
    { href: '/', icon: MapPin, label: 'Direcciones' },
    { href: '/', icon: CreditCard, label: 'Metodos de pago' },
    { href: '/', icon: Heart, label: 'Favoritos' },
    { href: '/', icon: LogOut, label: 'Salir de la cuenta' },
  ];

  return (
    <main className="bg-neutral-100 px-4 py-6 lg:py-12 max-w-screen-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Mi cuenta</h1>
      <div className="grid lg:grid-cols-2 gap-4">
        {links.map(({ href, icon, label }) => (
          <AccountLink key={label} href={href} icon={icon} label={label} />
        ))}
      </div>
    </main>
  );
}
