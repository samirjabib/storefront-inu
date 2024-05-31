import Logo from '@/components/common/logo/logo';

export default function WelcomeHome({ className }: { className?: string }) {
  return (
    <div className="py-12 px-4 ">
      <div className="flex flex-row items-baseline gap-x-1 mb-4 justify-center">
        <h1 className="text-center h1">
          Bienvenidos a <Logo animate />
        </h1>
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
