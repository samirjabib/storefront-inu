import LocalizedClientLink from '@/components/common/localized-client-link/localized-client-link';

export default function FooterNavigation() {
	return (
		<div className=' flex flex-row  justify-around gap-x-4 w-full'>
			<div>
				<h3 className='font-semibold text-sm text-neutral-800 uppercase mb-4'>
					Compañia
				</h3>
				<ul className='flex flex-col gap-y-2'>
					<li className='font-normal text-neutral-500 text-base'>
						<LocalizedClientLink href='/'>
							¿Como funciona techhunter?
						</LocalizedClientLink>
					</li>
					<li className='font-normal text-neutral-500 text-base'>
						<LocalizedClientLink href='/'>
							Terminos y condiciones
						</LocalizedClientLink>
					</li>

					<li className='font-normal text-neutral-500 text-base'>
						<LocalizedClientLink href='/'>
							Políticas de privacidad
						</LocalizedClientLink>
					</li>
				</ul>
			</div>
			<div className=''>
				<h3 className='font-semibold text-sm text-neutral-800 uppercase mb-4'>
					Soporte y ayuda
				</h3>
				<ul className='flex flex-col gap-y-2'>
					<li className='font-normal text-neutral-500 text-base'>
						<LocalizedClientLink href='/'>
							Quiero ser proveedor
						</LocalizedClientLink>
					</li>
					<li className='font-normal text-neutral-500 text-base'>
						<LocalizedClientLink href='/'>Contáctanos</LocalizedClientLink>
					</li>

					<li className='font-normal text-neutral-500 text-base'>
						<LocalizedClientLink href='/'>FAQs</LocalizedClientLink>
					</li>
				</ul>
			</div>
		</div>
	);
}
