import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function Cardheader() {
  return (
    <header className="w-full fixed top-0 z-50 max-w-7xl mx-auto bg-primary">
      <div className="flex w-full p-4 items-center justify-between text-primary-foreground">
        <ArrowLeft size={28} />
        <p className="text-base">
          Tu compra es <span className="font-bold">100% segura</span>
        </p>
        <ShieldCheck size={26} />
      </div>
    </header>
  );
}
