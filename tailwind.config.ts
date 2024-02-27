import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern':
          'linear-gradient(359deg, #0D0C0F 0.83%, rgba(13, 12, 15, 0.85) 28.55%, rgba(13, 12, 15, 0.00) 48.81%, rgba(13, 12, 15, 0.28) 70.66%, #0D0C0F 103.18%)',
        'dark-to-light':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(13 ,12 , 15 , 0.95) 78.02%)'
      },
      keyframes: {
        scale: {
          '0%': { scale: '0.9' },
          '50%': { scale: '1.1' },
          '100%': { scale: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        shimmer: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' }
        },
        blur: {
          '100%': { scale: '1', filter: 'blur(0)' }
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      },
      animation: {
        showIn: 'fadeIn 1s ease',
        showOut: 'fadeOut 1s linear forwards',
        scale: 'scale .8s ease-in-out'
      }
    }
  },
  plugins: []
}
export default config
