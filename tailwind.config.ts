import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navClr: "#03001c",
        priClr: "#D9159A",
        secClr: "#ffcdf5",
        actClr: "#5EBAB0",
        darkBgClr: "#121212",
        vscodeClr: "#282c34",
        vscodeClr1: "#21252b",
      },
      backgroundImage: {
        // svgBg: "url('/about1.png')",
      },
    },
  },
  plugins: [],
};
export default config;
