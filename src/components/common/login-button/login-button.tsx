'use client';

import { cn } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function LoginButton({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleLogin = (query: string) => {
		const params = new URLSearchParams(searchParams);
		params.set('modal', query);

		replace(`${pathname}?${params.toString()}`, { scroll: false });
	};

	return (
		<button
			type='button'
			onClick={() => handleLogin('login')}
			className={cn(className)}
		>
			{children}
		</button>
	);
}
