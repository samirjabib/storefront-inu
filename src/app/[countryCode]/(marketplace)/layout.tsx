import UnderDevelopment from '@/components/common/under-development/under-development';
import Footer from '@/components/layout/footer/footer';
import Header from '@/components/layout/header/header';
import Tabs from '@/components/layout/tabs/tabs';
import { Code } from 'lucide-react';
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
      <UnderDevelopment />
      <Header />
      {children}
      <Footer />
      <Tabs />
    </div>
  );
}
