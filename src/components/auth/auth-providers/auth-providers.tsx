import { m } from 'framer-motion';

import { FaApple } from 'react-icons/fa';
import AuthOptionButton from './auth-provider-button';
import { FiMail } from 'react-icons/fi';
import { BsGoogle } from 'react-icons/bs';

import { LazyMotion, domAnimation } from 'framer-motion';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function AuthOptionsContainer() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleLoginEmail = () => {
    const params = new URLSearchParams(searchParams);
    params.set('login_with_email', 'true');

    replace(`${pathname}?${params.toString()}`);
  };

  const handleRegisterEmail = () => {
    const params = new URLSearchParams(searchParams);
    params.set('register_with_email', 'true');

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="mb-8 flex w-full flex-col gap-2"
        key="auth-options"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.1 }}
      >
        <h2 className="font-semibold text-2xl text-center py-4">Ingresa con</h2>
        <AuthOptionButton
          onClick={() => console.log('click')}
          type="button"
          className="bg-primary text-white transition-all"
        >
          <BsGoogle size={24} /> Continuar con google
        </AuthOptionButton>
        <AuthOptionButton type="button" onClick={handleLoginEmail}>
          <FiMail size={24} />
          Ingresa con tu email
        </AuthOptionButton>
        <AuthOptionButton type="button" onClick={() => console.log('click')}>
          <FaApple size={24} />
          Ingresa con Apple
        </AuthOptionButton>
        <div className="mt-10 border-t border-t-black/10 pt-10" />

        <button
          type="button"
          className="w-full text-center font-medium text-primary transition-colors hover:text-primary/70"
          onClick={handleRegisterEmail}
        >
          Crea tu cuenta
        </button>
      </m.div>
    </LazyMotion>
  );
}
