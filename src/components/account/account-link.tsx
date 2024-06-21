import { FC } from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface AccountLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const AccountLink: FC<AccountLinkProps> = ({ href, icon: Icon, label }) => (
  <Link href={href} className="flex gap-4 bg-white p-6 rounded-lg">
    <Icon size={24} />
    <p className="text-base font-semibold">{label}</p>
  </Link>
);

export default AccountLink;
