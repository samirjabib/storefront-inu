import { PawPrint } from 'lucide-react';

export default function WelcomeHome() {
  return (
    <div className="py-12 px-4 ">
      <div className="flex flex-row items-baseline gap-x-1 mb-4 justify-center">
        <h1 className="text-center text-neutral-900 font-bold text-3xl lg:text-5xl">
          Bienvenidos a{' '}
          <span className="relative inline-block">
            <span className="animate-wave inline-block bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-orange-300">
              S
            </span>
            <span className="animate-wave-delay-200 inline-block bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-orange-300">
              h
            </span>
            <span className="animate-wave-delay-400 inline-block bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-orange-300">
              o
            </span>
            <span className="animate-wave-delay-600 inline-block bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-orange-300">
              p
            </span>
            <span className="animate-wave-delay-800 inline-block bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-orange-300">
              e
            </span>
            <span className="animate-wave-delay-1000 inline-block bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-orange-300">
              t
            </span>
          </span>
        </h1>
      </div>
      <p className="text-sm font-medium  text-center max-w-screen-md mx-auto">
        Somos el mejor marketplace para mascotas! Seleccionamos a los mejores
        vendedores para garantizar productos y servicios de alta calidad.{' '}
        <span className="text-neutral-900 font-bold">
          Porque tu mejor amigo merece lo mejor💕!
        </span>
      </p>
    </div>
  );
}
