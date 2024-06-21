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
  return (
    <main className="bg-neutral-100 px-4 py-6 lg:py-12 grid lg:grid-cols-2 gap-4 max-w-screen-md mx-auto">
      <Link href={'/'} className="flex gap-4 bg-white p-6 rounded-lg">
        <CircleUser size={24} />
        <p className="text-base font-semibold">Mi Perfil</p>
      </Link>
      <Link href={'/'} className="flex gap-4 bg-white p-6 rounded-lg">
        <Package size={24} />
        <p className="text-base font-semibold"> Mis Pedidos</p>
      </Link>
      <Link href={'/'} className="flex gap-4 bg-white p-6 rounded-lg">
        <MapPin size={24} />
        <p className="text-base font-semibold">Direcciones</p>
      </Link>
      <Link href={'/'} className="flex gap-4 bg-white p-6 rounded-lg">
        <CreditCard size={24} />
        <p className="text-base font-semibold">Metodos de pago</p>
      </Link>
      <Link href={'/'} className="flex gap-4 bg-white p-6 rounded-lg">
        <Heart size={24} />
        <p className="text-base font-semibold">Favoritos</p>
      </Link>
      <Link href={'/'} className="flex gap-4 bg-white p-6 rounded-lg">
        <LogOut size={24} />
        <p className="text-base font-semibold">Salir de la cuenta</p>
      </Link>
    </main>
  );
}
