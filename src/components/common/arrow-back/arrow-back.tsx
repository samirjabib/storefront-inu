'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ArrowBack() {
  const router = useRouter();
  return (
    <button className="p-2" onClick={() => router.back()}>
      <ArrowLeft size={26} />
    </button>
  );
}
