import { Ellipsis } from 'lucide-react';

export default function SideMenuHeader() {
  return (
    <div className="flex flex-row items-center justify-between absolute w-full bottom-0 left-0 p-5 bg-neutral-100 border-t border-neutral-200 shadow-sm">
      <div className="flex flex-row items-center gap-x-2">
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
        <h4 className="text-gray-800 text-xs">Samir jabib</h4>
      </div>
      <div>
        <Ellipsis className="text-gray-500" size={24} />
      </div>
    </div>
  );
}
