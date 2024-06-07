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

export function ProductSpecifications() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='outline'>Ver especificaciones</Button>
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
