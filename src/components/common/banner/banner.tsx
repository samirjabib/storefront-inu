import { cn } from '@/lib/utils';
import BannerSwiper from './banner-swiper';
import { BannerType } from './data';

export default function Banner({
	data,
	className,
}: {
	data: BannerType[];
	className?: string;
}) {
	return (
		<div className={cn('px-3 max-w-screen-2xl mx-auto md:px-6', className)}>
			<BannerSwiper data={data} />
		</div>
	);
}
