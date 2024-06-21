import { cn } from '@/lib/utils';

export default function ProductDisccountLabel({
  className,
  percentage_diff,
}: {
  className?: string;
  percentage_diff: string;
}) {
  return (
    <span
      className={cn(
        'bg-disccount text-xs px-2 py-1 text-disccount-foreground rounded-full font-medium flex self-center',
        className
      )}
    >
      -{percentage_diff}% OFF
    </span>
  );
}
