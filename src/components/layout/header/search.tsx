import { Input } from '@/components/common/ui/input';
import { cn } from '@/lib/utils';
import { Search as SearchIcon } from 'lucide-react';

export default function Search({ className }: { className?: string }) {
	return (
		<div className={cn('relative flex items-center', className)}>
			<Input placeholder='Buscar' className='rounded-full bg-white' />
			<div className='absolute top-0 right-0 bottom-0 left-0 flex items-center justify-end pr-4'>
				<SearchIcon className='text-blue-700' size={24} />
			</div>
		</div>
	);
}
