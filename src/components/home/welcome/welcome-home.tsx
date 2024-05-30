export default function WelcomeHome() {
  return (
    <div className="py-12 px-4 ">
      <h1 className="text-center text-neutral-900 font-bold text-3xl lg:text-5xl mb-4">
        Bienvenidos a <span className="text-brand-500">Sho</span>
        <span className="text-orange-300">pet</span>
      </h1>
      <p className="text-sm font-medium  text-center max-w-screen-md mx-auto">
        Somos un marketplace especializado en{' '}
        <span className="font-bold">Mascotas</span>. Seleccionamos a los mejores
        vendedores del mercado, asegurando la máxima calidad y confiabilidad en
        cada producto que ofrecemos.
      </p>
    </div>
  );
}
