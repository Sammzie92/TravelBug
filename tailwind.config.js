/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", 
  "./screens/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}",
  "./assets/**/*.{js,jsx,ts,tsx}",
  
    
  ],
  purge:[],
  theme: {
    extend: {},
  },
  variants:{},
  plugins: [],
}

