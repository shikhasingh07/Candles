// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#E3AC37",     // outer frame
          paper: "#FBF6ED",      // muted cream background
          green: "#13515A",      // main text / headings
          greenSoft: "#2C6F70",  // hover / accents
          muted: "#7C8A86",      // small text
        },
      },
    },
  },
  plugins: [],
};
