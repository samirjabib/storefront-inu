import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins_font = Poppins({
  weight: ['400', '500', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://localhost:8000';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins_font.className}>{children}</body>
    </html>
  );
}
