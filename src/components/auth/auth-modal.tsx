'use client';
import { User } from 'lucide-react';

import { Dialog, DialogContent, DialogTrigger } from '../common/ui/dialog';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import AuthOptionsContainer from './auth-providers/auth-providers';
import AuthButton from './auth-button/auth-button';

export default function AuthModal() {
  const searchParams = useSearchParams();

  const isOpen = searchParams.get('login_modal_open');

  console.log(isOpen);
  const { push } = useRouter();
  const pathname = usePathname();

  const onCloseModal = () => {
    const params = new URLSearchParams(searchParams);

    params.delete('login_modal_open');
    params.delete('login_with_email');
    push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <Dialog open={isOpen === 'true' ? true : false} onOpenChange={onCloseModal}>
      <DialogTrigger asChild>
        <AuthButton className="flex flex-col">
          <User size={24} className="text-white" />
        </AuthButton>
      </DialogTrigger>
      <DialogContent className="flex h-screen items-center bg-blue-100 px-8 py-6 md:h-auto md:max-w-sm lg:max-h-[95%]">
        <AuthOptionsContainer />
      </DialogContent>
    </Dialog>
  );
}
