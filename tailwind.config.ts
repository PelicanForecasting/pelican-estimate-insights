
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				heading: ['Merriweather', 'Georgia', 'serif'],
				display: ['Merriweather', 'Georgia', 'serif'],
				body: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
				sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(222 47% 11%)',
					foreground: 'hsl(210 40% 98%)'
				},
				secondary: {
					DEFAULT: 'hsl(187 76% 48%)',
					foreground: 'hsl(222 47% 11%)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(35 100% 56%)',
					foreground: 'hsl(222 47% 11%)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom color scheme for Pelican Forecasting Group
				pelican: {
					navy: 'hsl(222 47% 11%)',
					teal: 'hsl(187 76% 48%)',
					orange: 'hsl(35 100% 56%)',
					cream: 'hsl(210 40% 98%)',
					slate: 'hsl(222 47% 11%)',
					softTeal: 'hsl(187 76% 48%, 0.5)',
					success: '#3D9970',
					warning: '#F4A835',
					error: '#E05D5D',
					black: '#333333',
					white: '#FFFFFF',
					lightGray: 'hsl(210 40% 98%)',
					mediumGray: '#DCE0E5',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                // Add text color specifically for the style guide
                gray: {
                    800: 'hsl(222 47% 11%)' // For body text
                }
			},
			borderRadius: {
				lg: '8px',       // Card border radius
				md: '6px',       // Button border radius
				sm: '4px'        // Form input border radius
			},
			boxShadow: {
				'sm': '0px 2px 4px rgba(0,0,0,0.1)', // Subtle shadow for cards
				'md': '0px 4px 8px rgba(0,0,0,0.12)',
				'lg': '0px 8px 16px rgba(0,0,0,0.14)'
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
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' },
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				shimmer: {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.4s ease-out',
				'fade-out': 'fade-out 0.4s ease-out',
				'slide-in': 'slide-in 0.6s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
				'pulse-slow': 'pulse-slow 3s infinite',
				'float': 'float 6s ease-in-out infinite',
				'shimmer': 'shimmer 2s infinite linear',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'shimmer': 'linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)',
			},
            spacing: {
                // Adding custom spacing per the style guide
                '24': '24px',
                '48': '48px',
                '80': '80px',
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
