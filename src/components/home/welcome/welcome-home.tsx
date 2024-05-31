import Logo from '@/components/common/logo/logo';
import Heading from '@/components/common/ui/heading';
import { cn } from '@/lib/utils';
import { PawPrint } from 'lucide-react';

export default function WelcomeHome({ className }: { className?: string }) {
  return (
    <div className={cn('px-4', className)}>
      <div className="">
        <Heading as="h1" size={'titleBig'} className="text-center">
          <span className="md:hidden">
            Bienvenidos <br />a <br />
          </span>
          <span className="hidden md:block">Bienvenidos a</span>
          <Logo animate />
        </Heading>
      </div>
      <p className="text-center max-w-2xl mx-auto parragraph">
        Somos el mejor marketplace para mascotas! Seleccionamos a los mejores
        vendedores para garantizar productos y servicios de alta calidad.{' '}
        <span className="font-bold">
          Porque tu mejor amigo merece lo mejor💕!
        </span>
      </p>
    </div>
  );
}
