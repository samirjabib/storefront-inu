import dummieImage from '../../../../public/grid-image.png';

import Image from 'next/image';
import BannerGridMobile from './banner-grid-mobile';
import BannerGridDesktop from './banner-grid-desktop';

export default function BannerGrid() {
  //remember change the image object fill per object cover
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-12">
      <div className="md:hidden w-full">
        <BannerGridMobile />
      </div>
      <div className="hidden md:block w-full">
        <BannerGridDesktop />
      </div>
    </div>
  );
}
