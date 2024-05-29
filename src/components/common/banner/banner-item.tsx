import Image from 'next/image';
import { BannerType } from './data';
import { isMobileViewport } from './utils';

type Props = {
	banner: BannerType;
};

export default function BannerItem(props: Props) {
	const isMobile = isMobileViewport();

	if (isMobile) {
		if (props.banner.imgMobile) {
			return (
				<Image
					alt=''
					src={props.banner.imgMobile}
					fill
					className='object-cover rounded-md'
				/>
			);
		}
		if (props.banner.mobileGif) {
			return (
				<Image
					alt=''
					src={props.banner.mobileGif}
					fill
					className='object-cover rounded-md'
				/>
			);
		}
	}

	if (props.banner.desktopGif) {
		return (
			<Image
				alt=''
				src={props.banner.desktopGif}
				fill
				className='object-cover rounded-md'
			/>
		);
	}
	if (props.banner.imgDesktop) {
		return (
			<Image
				alt=''
				src={props.banner.imgDesktop}
				fill
				className='object-cover rounded-md'
			/>
		);
	}
}
