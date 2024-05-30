import { cn } from '@/lib/utils';

export default function Logo({ animate }: { animate?: boolean }) {
  return (
    <span className="relative inline-block">
      <span
        className={cn(
          'inline-block bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-orange-300',
          animate ? 'animate-wave' : null
        )}
      >
        S
      </span>
      <span
        className={cn(
          'inline-block bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-orange-300',
          animate ? 'animate-wave-delay-200' : null
        )}
      >
        h
      </span>
      <span
        className={cn(
          'inline-block bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-orange-300',
          animate ? 'animate-wave-delay-400' : null
        )}
      >
        o
      </span>
      <span
        className={cn(
          'inline-block bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-orange-300',
          animate ? 'animate-wave-delay-600' : null
        )}
      >
        p
      </span>
      <span
        className={cn(
          'inline-block bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-orange-300',
          animate ? 'animate-wave-delay-800' : null
        )}
      >
        e
      </span>
      <span
        className={cn(
          'inline-block bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-orange-300',
          animate ? 'animate-wave-delay-1000' : null
        )}
      >
        t
      </span>
    </span>
  );
}
