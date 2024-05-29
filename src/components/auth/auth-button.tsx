'use client';

import { cn } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function AuthButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleLogin = () => {
    const params = new URLSearchParams(searchParams);
    params.set('login_modal_open', 'true');

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <button type="button" onClick={handleLogin} className={cn(className)}>
      {children}
    </button>
  );
}
