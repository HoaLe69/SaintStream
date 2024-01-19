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
        col: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        expand: {
          '0%': { height: '40px' },
          '100%': { height: '200px' }
        }
      },
      animation: {
        'close-to-open': 'col 1s ease-in-out',
        'expand-h': 'expand 1s ease-in-out'
      }
    }
  },
  plugins: []
}
export default config
