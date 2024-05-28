import { cn } from '@/lib/utils';
import { SearchIcon } from 'lucide-react';
import { Input } from '../common/ui/input';

export default function SellerSearch({ className }: { className?: string }) {
  return (
    <div className={cn('relative flex items-center w-full', className)}>
      <Input
        placeholder="Buscar producto del vendedor"
        className="rounded-full bg-white"
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-end pr-4">
        <SearchIcon className="text-blue-700" size={24} />
      </div>
    </div>
  );
}
