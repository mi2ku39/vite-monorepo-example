import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: false,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {},
    extend: {},
  },

  // The output directory for your css system
  outdir: "../panda-external-styled-system",
  importMap: "panda-external-styled-system",
  outExtension: "js",
});
