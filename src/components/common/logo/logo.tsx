import { cn } from '@/lib/utils';

export default function Logo({ animate }: { animate?: boolean }) {
  return (
    <span className="relative inline-block">
      <span
        className={cn(
          'inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-300',
          animate ? 'animate-wave' : null
        )}
      >
        I
      </span>
      <span
        className={cn(
          'inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-300',
          animate ? 'animate-wave-delay-200' : null
        )}
      >
        N
      </span>
      <span
        className={cn(
          'inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-300',
          animate ? 'animate-wave-delay-400' : null
        )}
      >
        U
      </span>
    </span>
  );
}
