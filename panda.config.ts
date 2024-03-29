import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx,astro}",
    "./pages/**/*.{js,jsx,ts,tsx,astro}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          textPrimary: {
            value: "#010D3E",
          },

          textSecondary: {
            value: "#BCBCBC",
          },

          textTertiary: {
            value: "#7B7B7B",
          },

          purple: {
            100: {
              value: "#EAEEFE",
            },
            200: {
              value: "#6F6C90",
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
