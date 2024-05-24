'use client';
import { User } from 'lucide-react';
import LoginButton from '../common/login-button/login-button';
import { Button } from '../common/ui/button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../common/ui/dialog';
import { Input } from '../common/ui/input';
import { Label } from '../common/ui/label';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import AuthOptionsContainer from './auth-providers/auth-providers';

export default function AuthModal() {
  const searchParams = useSearchParams();

  const isOpen = searchParams.get('login_modal');
  const { push } = useRouter();
  const pathname = usePathname();

  const onCloseModal = () => {
    const params = new URLSearchParams(searchParams);

    params.delete('login_modal');
    params.delete('type');
    push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <Dialog open={isOpen ? true : false} onOpenChange={onCloseModal}>
      <DialogTrigger asChild>
        <LoginButton className="flex flex-col">
          <User size={24} className="text-white" />
        </LoginButton>
      </DialogTrigger>
      <DialogContent className="flex h-screen items-center bg-blue-100 px-8 py-6 md:h-auto md:max-w-sm lg:max-h-[95%]">
        <AuthOptionsContainer />
      </DialogContent>
    </Dialog>
  );
}
