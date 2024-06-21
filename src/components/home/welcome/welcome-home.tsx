import Logo from '@/components/common/logo/logo';
import { cn } from '@/lib/utils';

export default function WelcomeHome({ className }: { className?: string }) {
  return (
    <div className={cn('px-4', className)}>
      <div className="flex flex-row items-baseline gap-x-1 mb-4 justify-center">
        <h1 className="text-center h1">
          {/* <Logo animate /> */} Tienda de mascotas!
        </h1>
      </div>
      <p className="text-center max-w-xl mx-auto parragraph text-sm md:text-base">
        Somos la mejor tienda para mascotas de medellin!
        <span className="font-bold">
          Porque tu mejor amigo merece lo mejor💕!
        </span>
      </p>
    </div>
  );
}
