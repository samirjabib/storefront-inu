import { cn } from '@/lib/utils';

export default function ProductDisccountLabel({
  className,
}: {
  className?: string;
}) {
  return (
    <span
      className={cn(
        'bg-disccount text-xs px-2 py-1 text-disccount-foreground rounded-full font-medium flex self-center',
        className
      )}
    >
      -17% OFF
    </span>
  );
}
