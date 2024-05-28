import { Button } from '@/components/common/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/common/ui/dialog';

export function ProductPaymentMethodsDesktop() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant='link'
					className='text-brand-500/80 justify-start p-0 text-sm'
				>
					{' '}
					Ver metodos de pago
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Edit profile</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when you're done.
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<Button type='submit'>Close</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
