import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "index",
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "styled-components",
        "react",
        "react-dom",
        "react/jsx-runtime",
        "stylis",
      ],
      output: {
        globals: {
          react: "React",
          "styled-components": "styled",
        },
      },
    },
    emptyOutDir: false,
  },
  plugins: [react()],
});
