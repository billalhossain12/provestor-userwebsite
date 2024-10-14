// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;

import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#24B24B",
      secondary: "#0E0E0E",
    },

    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        ibmPlexSansCondensed: ["IBM Plex Sans", "sans-serif"],
        crimsonText: ["Crimson Text", "serif"],
      },
    },

    screens: {
      xxs: "375px",
      "max-xxs": { max: "374px" },
      xs: "475px",
      "max-xs": { max: "474px" },
      sm: "640px",
      "max-sm": { max: "639px" },
      // => @media (min-width: 640px) { ... }

      md: "768px",
      "max-md": { max: "767px" },
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      "max-lg": { max: "1023px" },
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      "max-xl": { max: "1279px" },
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      "max-2xl": { max: "1535px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
});

