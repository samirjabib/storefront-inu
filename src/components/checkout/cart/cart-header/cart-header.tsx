import ArrowBack from '@/components/common/arrow-back/arrow-back';
import WhatsappLink from '@/components/layout/header/whatsapp-link';
import { ShieldCheck } from 'lucide-react';

export default function CardHeader() {
  return (
    <header className="w-full max-w-7xl  bg-primary p-2">
      <div className="flex w-full  items-center justify-between text-primary-foreground">
        <ArrowBack />
        <p className="text-base">
          Tu compra es <span className="font-bold">100% segura</span>
        </p>
        <div className="px-2">
          <ShieldCheck size={26} />
        </div>
      </div>
    </header>
  );
}
