import LocalizedClientLink from '@/components/common/localized-client-link/localized-client-link';

export default function ProductDetails() {
	return (
		<div className='flex flex-col w-full mb-4'>
			<h3 className='text-base font-bold text-neutral-900 mb-4'>
				Detalles del producto
			</h3>
			<ul className='flex w-full flex-col gap-2 lg:max-w-[70%]'>
				<li className='text-sm flex gap-2 font-normal'>
					<span className='text-neutral-600 w-1/3'>Marca:</span>
					<LocalizedClientLink href='/' className='w-2/3 underline'>
						Max Vita
					</LocalizedClientLink>{' '}
				</li>
				<li className='text-sm flex gap-2 font-normal'>
					<span className='text-neutral-600 w-1/3'>Categoria:</span>
					<LocalizedClientLink href='/' className='w-2/3 underline'>
						Alimento de perros
					</LocalizedClientLink>
				</li>
			</ul>
		</div>
	);
}
