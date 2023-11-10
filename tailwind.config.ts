import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        darkBlue: '#001B79',
        brightBlue: '#1640D6',
        pink: '#ED5AB3',
        lightPink: '#FF90C2',
        reddish:"#fb2c2c",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui:{
    themes:[
      {
        mytheme: {
          primary: '#1640D6',   // brightBlue
          secondary: '#ED5AB3', // pink
          accent: '#FF90C2',    // lightPink
          neutral: '#001B79',   // darkBlue
          // ... other colors if you want to customize further
        },
      },
    ]
  }
}
export default config
