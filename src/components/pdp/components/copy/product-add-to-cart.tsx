import { Button } from '@/components/common/ui/button';

export default function ProductAddToCart() {
	return (
		<Button
			variant={'outline'}
			className=' rounded-full bg-neutral-100 text-neutral-900 text-base hover:bg-neutral-200 transition-all'
		>
			Agregar al carrito
		</Button>
	);
}
