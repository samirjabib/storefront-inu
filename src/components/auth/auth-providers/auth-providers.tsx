import { m } from 'framer-motion';

import { FaXTwitter } from 'react-icons/fa6';
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
        <h2 className="font-semibold text-2xl text-center py-4">Logear con</h2>
        <AuthOptionButton
          onClick={() => console.log('click')}
          type="button"
          className="bg-primary text-white hover:bg-primary/90"
        >
          <BsGoogle className="text-lg text-white/50" /> Continuar con google
        </AuthOptionButton>
        <AuthOptionButton type="button" onClick={handleLoginEmail}>
          <FiMail className="text-lg text-zinc-600" />
          Ingresa con tu email
        </AuthOptionButton>
        <AuthOptionButton type="button" onClick={() => console.log('click')}>
          <FaXTwitter className="text-lg text-zinc-600" />
          Ingresa con Twitter
        </AuthOptionButton>
        <div className="mt-10 border-t border-t-black/10 pt-10" />

        <button
          type="button"
          className="w-full text-center font-medium text-primary transition-colors hover:text-primary/70"
        >
          Crea tu cuenta
        </button>
      </m.div>
    </LazyMotion>
  );
}
