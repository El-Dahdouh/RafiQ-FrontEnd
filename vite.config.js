import AutoImport from "unplugin-auto-import/vite";
import react from "@vitejs/plugin-react";

export default {
  plugins: [
    react(),
    AutoImport({
      imports: [
        "react", // auto-import useState, useEffect, etc.
        "react-router-dom",
      ],
      dirs: ["src/**"],
      dts: "src/auto-imports.d.ts", // generates auto-import typings
      eslintrc: {
        enabled: false,
      },
    }),
  ],
};
