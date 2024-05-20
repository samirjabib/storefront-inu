import FooterNavigation from './footer-navigation';
import FooterNewsletter from './footer-newsletter';
import FooterRights from './footer-rights';

export default function Footer() {
	return (
		<div className='w-full'>
			<div className='px-4 mx-auto md:px-6 max-w-screen-2xl'>
				<div className='w-full flex-col mx-auto border-t border-neutral-200  md:flex-row items-center flex gap-16 py-16 border-b '>
					<FooterNewsletter />
					<FooterNavigation />
				</div>
				<FooterRights />
			</div>
		</div>
	);
}
