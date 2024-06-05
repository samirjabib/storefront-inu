import { cn } from '@/lib/utils';
import { Package, CreditCard, Truck, TicketPercent } from 'lucide-react';

const promises = [
  {
    icon: <Truck size={24} className="text-emerald-500" />,
    title: 'Entregas el mismo día',
    description: 'Entrega en 24 horas hábiles',
  },
  {
    icon: <Package size={24} className="text-emerald-500" />,
    title: 'Devoluciones sin costo',
    description: 'Hasta 30 días para devolver',
  },
  {
    icon: <CreditCard size={24} className="text-emerald-500" />,
    title: 'Pago seguro',
    description: 'Pasarelas de pago certificadas y seguras',
  },
  {
    icon: <TicketPercent size={24} className="text-emerald-500" />,
    title: 'Descuentos exclusivos',
    description: 'Ofertas solo para miembros',
  },
];

export default function Promises({
  className,
  classNameContainer,
}: {
  className?: string;
  classNameContainer?: string;
}) {
  return (
    <section
      className={cn(
        'flex flex-row max-w-screen-xl px-4 md:px-6 mx-auto',
        classNameContainer
      )}
    >
      <div
        className={cn(
          'grid grid-cols-1 gap-5 w-full md:grid-cols-4 bg-neutral-200 py-6 px-4 rounded-lg',
          className
        )}
      >
        {promises.map((item, index) => (
          <div
            key={index}
            className="flex items-row items-center flex-row gap-x-4 border border-gray-200 w-full p-3 rounded-lg bg-neutral-50"
          >
            <div className="bg-brand-50 rounded-full shadow-xs w-12 h-12 border border-brand-300 flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xs text-gray-800 font-semibold">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
