import Image from 'next/image';
import { assets } from '../../../../../public/assets/assets';
export default function ProductPayWithAddi() {
	return (
		<div className='flex w-full flex-col  border p-2 rounded-lg max-w-screen-sm group cursor-pointer'>
			<div className='flex w-full gap-2 items-center'>
				<div>
					<Image
						alt='addi'
						src={assets.addi_icon}
						width={48}
						height={48}
						className='max-w-7 max-h-7'
					/>
				</div>
				<div className='flex gap-2 text-neutral-900 text-nowrap flex-wrap text-sm'>
					paga a credito en
					<Image alt='addi' src={assets.addi} width={28} height={28} />
					<span className='font-semibold'>hasta 6 cuotas!</span> -
					<span className='link'>revisa si aplicas</span>
				</div>
			</div>
		</div>
	);
}
