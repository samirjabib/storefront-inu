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
				'brand-50': '#eff6ff',
				'brand-100': '#dbeafe',
				'brand-300': '#93c5fd',
				'brand-500': '#3b82f6',
				'brand-700': '#1d4ed8',
				'brand-900': '#1e3a8a',
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
				'neutral-50': '#fafafa',
				'neutral-100': '#f5f5f5',
				'neutral-300': '#d4d4d4',
				'neutral-500': '#737373',
				'neutral-700': '#404040',
				'neutral-900': '#171717',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
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
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
