'use client';

import 'swiper/css';
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { BannerType } from './data';
import BannerItem from './banner-item';
import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type Props = {
	data: BannerType[];
};

export default function BannerSwiper(props: Props) {
	const sliderRef = useRef<SwiperClass>();

	return (
		<div className=''>
			<Swiper
				onSwiper={it => (sliderRef.current = it)}
				modules={[Navigation]}
				className='relative'
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
			>
				{props.data.map(item => {
					return (
						<SwiperSlide className='pl-6 min-h-40 md:min-h-96' key={item.id}>
							<BannerItem banner={item} />
						</SwiperSlide>
					);
				})}
				<div
					className='absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer z-20 bg-white rounded-full border border-neutral-200 shadow-sm p-1 mx-2'
					onClick={() => sliderRef.current?.slidePrev()}
				>
					<ArrowLeft className='text-neutral-800' size={24} />
				</div>
				<div
					className='absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer z-20 bg-white rounded-full border border-neutral-200 shadow-sm p-1 mx-2'
					onClick={() => sliderRef.current?.slideNext()}
				>
					<ArrowRight className='text-neutral-800' size={24} />
				</div>
			</Swiper>
		</div>
	);
}
