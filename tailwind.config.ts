import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '520px', // Phones (landscape)
        sm: '768px', // Tablets (portrait)
        md: '1024px', // Tablets (landscape)
        lg: '1280px', // Laptops
        xl: '1640px', // Desktops
      },
    },
  },
  plugins: [],
}
export default config
