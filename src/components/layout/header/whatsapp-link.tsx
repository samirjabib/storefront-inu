import LocalizedClientLink from '@/components/common/localized-client-link/localized-client-link';
import { FaWhatsapp } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

export default function WhatsappLink({
  containerStyles,
}: {
  containerStyles?: string;
}) {
  return (
    <LocalizedClientLink href="/" className={cn(containerStyles)}>
      <div className="text-xs md:text-sm font-bold text-primary-foreground flex items-center gap-2">
        <FaWhatsapp size={20} />
        ¿Necesitas ayuda? Escribenos.
      </div>
    </LocalizedClientLink>
  );
}
