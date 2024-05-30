import { StaticImageData } from 'next/image';
import { assets } from '../../../../public/assets/assets';

export type BannerType = {
  id: string;
  imgMobile: string | null | undefined | StaticImageData;
  imgDesktop: string | null | undefined | StaticImageData;
  mobileGif: string | null | undefined | StaticImageData;
  desktopGif: string | null | undefined | StaticImageData;
};

export const dummieData: BannerType[] = [
  {
    id: '1',
    imgMobile: null,
    imgDesktop: null,
    mobileGif: assets.max_banner,
    desktopGif: assets.max_banner,
  },
  {
    id: '2',
    imgMobile: assets.max_banner,
    imgDesktop: assets.max_banner,
    mobileGif: null,
    desktopGif: null,
  },
];
