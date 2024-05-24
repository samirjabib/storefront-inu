import { FaXTwitter } from 'react-icons/fa6';
import AuthOptionButton from './auth-provider-button';
import { FiMail } from 'react-icons/fi';
import { BsGoogle } from 'react-icons/bs';
import { LazyMotion, domAnimation } from 'framer-motion';

export default function AuthOptionsContainer() {
  return (
    <div className="mb-8 flex w-full flex-col gap-2">
      <h2 className="font-semibold text-2xl text-center py-4">Logear con</h2>
      <AuthOptionButton
        onClick={() => console.log('click')}
        type="button"
        className="bg-primary text-white hover:bg-primary/90"
      >
        <BsGoogle className="text-lg text-white/50" /> Continuar con google
      </AuthOptionButton>
      <AuthOptionButton type="button" onClick={() => console.log('click')}>
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
    </div>
  );
}
