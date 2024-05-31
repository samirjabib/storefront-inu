import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'brand-50': '#ecfdf5',
        'brand-100': '#d1fae5',
        'brand-300': '#6ee7b7',
        'brand-500': '#10b981',
        'brand-700': '#047857',
        'brand-900': '#064e3b',
        'accent-primary-50': '#fff7ed',
        'accent-primary-100': '#ffedd5',
        'accent-primary-300': '#fdba74',
        'accent-primary-500': '#f97316',
        'accent-primary-700': '#c2410c',
        'accent-secondary-50': '#fef2f2',
        'accent-secondary-100': '#fee2e2',
        'accent-secondary-300': '#fca5a5',
        'accent-secondary-500': '#ef4444',
        'accent-secondary-700': '#b91c1c',
        'accent-terciary-50': '#f0fdf4',
        'accent-terciary-100': '#dcfce7',
        'accent-terciary-300': '#86efac',
        'accent-terciary-500': '#22c55e',
        'accent-terciary-700': '#15803d',
        'neutral-50': '#f9fafb',
        'neutral-100': '#f3f4f6',
        'neutral-200': '#e5e7eb',
        'neutral-300': '#d1d5db',
        'neutral-500': '#6b7280',
        'neutral-700': '#374151',
        'neutral-900': '#111827',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          700: 'hsl(var(--primary-700))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        wave: 'wave 1s ease-in-out infinite',
        'wave-delay-200': 'wave 1s ease-in-out 0.2s infinite',
        'wave-delay-400': 'wave 1s ease-in-out 0.4s infinite',
        'wave-delay-600': 'wave 1s ease-in-out 0.6s infinite',
        'wave-delay-800': 'wave 1s ease-in-out 0.8s infinite',
        'wave-delay-1000': 'wave 1s ease-in-out 1s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
