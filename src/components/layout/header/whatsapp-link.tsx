import { FaWhatsapp } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function WhatsappLink({
  containerStyles,
}: {
  containerStyles?: string;
}) {
  return (
    <Link
      href="https://wa.me/573043535518?text=Hola!"
      target="_blank"
      className={cn(containerStyles)}
    >
      <div className="text-xs md:text-sm font-bold text-primary-foreground flex items-center gap-2">
        <FaWhatsapp size={20} />
        ¿Necesitas ayuda? Escribenos.
      </div>
    </Link>
  );
}
