import { ImLinkedin2 } from 'react-icons/im';

import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaDribbble,
} from 'react-icons/fa6';
import { FaApple } from 'react-icons/fa';

import { FaGoogle } from 'react-icons/fa6';
import { Input } from '@/components/common/ui/input';
import { Button } from '@/components/common/ui/button';
import LocalizedClientLink from '@/components/common/localized-client-link/localized-client-link';

export default function FooterNewsletter() {
  return (
    <div className="bg-white shadow-sm border border-neutral-200 p-6 rounded-lg w-full lg:max-w-lg">
      <div className="pb-5 border-b border-neutral-200">
        <div>
          <p className="text-neutral-500 font-medium text-sm mb-3">
            Enterate de nuestras promociones y mas.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row lg:gap-x-4 items-center">
            <Input placeholder="Ingresa tu email" className="rounded-full" />
            <Button className="px-8 w-full lg:w-auto">Subscribete!</Button>
          </div>
        </div>
      </div>
      <div className="py-5 border-b border-neutral-200">
        <p className="text-neutral-800 font-medium text-sm mb-3">
          Muy pronto{' '}
          <LocalizedClientLink href="/" className="underline">
            Shopet App
          </LocalizedClientLink>
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="bg-white border border-neutral-200 flex flex-row items-center gap-x-2 py-3 px-4 rounded-lg cursor-pointer">
            <FaGoogle
              size={32}
              className="text-neutral-800 hover:text-brand-500 transition-all"
            />

            <div>
              <p className="text-neutral-800 text-xs font-normal">
                Descargar en
              </p>
              <h4 className="text-neutral-800 font-bold text-lg leading-5">
                Google Play
              </h4>
            </div>
          </div>
          <div className="bg-white border border-neutral-200 flex flex-row items-center gap-x-2 py-3 px-4 rounded-lg cursor-pointer">
            <FaApple
              size={32}
              className="text-neutral-800 hover:text-brand-500 transition-all"
            />
            <div className="">
              <p className="text-neutral-800 text-xs font-normal">
                Descargar en
              </p>
              <h4 className="text-neutral-800 font-bold text-lg leading-5">
                AppStore
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-4 pt-6">
        <LocalizedClientLink href="/">
          <FaYoutube
            size={20}
            className="text-neutral-800 cursor-pointer hover:text-brand-500 transition-all"
          />
        </LocalizedClientLink>
        <LocalizedClientLink href="/">
          <FaXTwitter
            size={20}
            className="text-neutral-800 cursor-pointer hover:-brand-500 transition-all"
          />
        </LocalizedClientLink>
        <LocalizedClientLink href="/">
          <FaDribbble
            size={20}
            className="text-neutral-800 cursor-pointer hover:text-brand-500 transition-all"
          />
        </LocalizedClientLink>
        <LocalizedClientLink href="/">
          <FaFacebookF
            size={20}
            className="text-neutral-800 cursor-pointer hover:text-brand-500 transition-all"
          />
        </LocalizedClientLink>
        <LocalizedClientLink href="/">
          <ImLinkedin2
            size={20}
            className="text-neutral-800 cursor-pointer hover:text-purple-500 transition-all"
          />
        </LocalizedClientLink>
      </div>
    </div>
  );
}
