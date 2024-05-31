import BannerGridMobile from './banner-grid-mobile';
import BannerGridDesktop from './banner-grid-desktop';
import { cn } from '@/lib/utils';

export default function BannerGrid({ className }: { className?: string }) {
  //remember change the image object fill per object cover
  return (
    <div className={cn('max-w-screen-xl mx-auto px-4 md:px-6', className)}>
      <div className="md:hidden w-full">
        <BannerGridMobile />
      </div>
      <div className="hidden md:block w-full">
        <BannerGridDesktop />
      </div>
    </div>
  );
}
