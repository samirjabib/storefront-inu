import { Package } from "lucide-react";
import { MdLocalShipping } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";

export default function Promises() {
  return (
    <section className="flex flex-row max-w-screen-2xl px-4 md:px-6 mx-auto py-12 bg-blue-100 rounded-lg">
      <div className="grid grid-cols-1 gap-5 w-full md:grid-cols-5">
        {Array.from({ length: 5 }).map((item) => {
          return (
            <div className="flex items-row items-center flex-row gap-x-4 border border-gray-200 w-full p-3 rounded-lg bg-neutral-50">
              <div className="bg-blue-200 rounded-full shadow-xs w-12 h-12 border border-blue-300 flex items-center justify-center">
                <Package size={24} className="text-gray-700" />
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
