'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { LazyMotion, domAnimation } from 'framer-motion';
import { m } from 'framer-motion';

import { AiOutlineLock } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi';
import AuthHeaderNavigation from '../auth-header';
import InputField from './auth-input-field';
import { useState } from 'react';
import { Button } from '@/components/common/ui/button';
import ShowHideButton from './auth-show-hidden-button';

type LoginValues = {
  email: string;
  password: string;
};

export default function AuthLoginWithEmail() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const [isShow, setIsShow] = useState(false);

  const backToProviderOptions = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('login_with_email');
    params.delete('register_witH_email');

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.1 }}
      >
        <AuthHeaderNavigation
          title={'Ingresa con tu email'}
          onBackClick={backToProviderOptions}
        />
        <form className="mb-8 flex flex-col gap-5">
          <InputField
            icon={<FiMail className="text-lg text-zinc-600" />}
            type="email"
            name="email"
            placeholder={'Ingresa tu email'}
            required
          />
          <div className="relative">
            <InputField
              icon={<AiOutlineLock className="text-xl text-zinc-600" />}
              type={isShow ? 'text' : 'password'}
              name="password"
              placeholder={'Ingresa tu contraseña'}
              required
            />
            <ShowHideButton
              onClick={() => setIsShow(!isShow)}
              type="button"
              isShow={isShow}
              icon={isShow ? PiEyeBold : PiEyeClosedBold}
            />
          </div>

          <Button>Ingresar</Button>
        </form>

        <div className="my-4 h-px w-full bg-zinc-200" />
      </m.div>
    </LazyMotion>
  );
}
