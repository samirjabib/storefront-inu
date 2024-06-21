import AccountHeader from '@/components/account/account-header';
import Footer from '@/components/layout/footer/footer';
import Header from '@/components/layout/header/header';
import Tabs from '@/components/layout/tabs/tabs';
import { Metadata } from 'next';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://localhost:8000';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
};

export default async function StoreLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: string;
}) {
  return (
    <div className="bg-background">
      <Header />
      {children}
    </div>
  );
}
