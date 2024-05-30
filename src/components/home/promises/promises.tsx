import { Package } from 'lucide-react';
export default function Promises() {
  return (
    <section className="flex flex-row max-w-screen-xl px-4 md:px-6 mx-auto">
      <div className="grid grid-cols-1 gap-5 w-full md:grid-cols-4 bg-brand-100 py-6 px-4 rounded-lg">
        {Array.from({ length: 4 }).map((item) => {
          return (
            <div className="flex items-row items-center flex-row gap-x-4 border border-gray-200 w-full p-3 rounded-lg bg-neutral-50">
              <div className="bg-brand-100 rounded-full shadow-xs w-12 h-12 border border-primary flex items-center justify-center">
                <Package size={24} className="text-gray-500" />
              </div>
              <div>
                <h3 className="text-xs text-gray-800 font-semibold">
                  Envío gratis en medellin Colombia
                </h3>
                <p className="text-xs text-gray-500">Entrega en 24h hábiles</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
