import { Star } from 'lucide-react';
import SellerSearch from '../seller-search';

export default function SellerHeader() {
  return (
    <header className="bg-white gap-x-4 p-6 border-b border-gray-200 flex flex-col rounded-lg w-full">
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="flex flex-row gap-x-4 items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-lg shadow-sm border-2 border-gray-200" />
          <div>
            <h1 className="text-base text-gray-800 font-semibold">Gamestop</h1>
            <p className="text-sm text-gray-500">Tienda oficial</p>
          </div>
        </div>
        <div>
          <h3 className="text-xs text-gray-500">+ 1k ventas</h3>
          <div className="flex flex-row items-center gap-x-1 justify-end">
            <Star size={12} className={'fill-yellow-500 text-yellow-600'} />
            <h3 className="text-sm text-gray-800">4.5</h3>
          </div>
        </div>
      </div>

      <SellerSearch />
    </header>
  );
}
