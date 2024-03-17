import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "index",
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "panda-external-styled-system",
      ],
      output: {
        globals: {
          react: "React",
          "styled-components": "styled",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
    emptyOutDir: false,
  },
  plugins: [react()],
});
