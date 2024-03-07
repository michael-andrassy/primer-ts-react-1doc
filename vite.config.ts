/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { cwd } from "node:process";
import { viteSingleFile } from "vite-plugin-singlefile";
import svgrPlugin from "vite-plugin-svgr";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFilePath(relativePath: string): string {
  const tmp = path.resolve(cwd(), relativePath);
  //console.log("RESOLVING " + relativePath + " => " + tmp);
  return tmp;
}

const buildTimestamp = new Date().toISOString();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgrPlugin(),
    react({
      tsDecorators: true,
    }),
    viteSingleFile(),
  ],
  define: {
    // Define a global constant for the build timestamp
    "process.env.BUILD_TIMESTAMP": JSON.stringify(buildTimestamp),
  },
  resolve: {
    // keep tsconfig consistent
    alias: {
      "@": getFilePath("./src"),
      "@assets": getFilePath("./src/assets"),
      "@components": getFilePath("./src/components"),
      "@pages": getFilePath("./src/pages"),
      "@services": getFilePath("./src/services"),
      "@mytypes": getFilePath("./src/types"), // seems like there is a clash with 'types'
      "@data": getFilePath("./src/static_data"),
      "@utils": getFilePath("./src/utils"),
      "@tests": getFilePath("./test_src"),
    },
  },
  build: {
    // Additional configurations might be required depending on the project's needs
    assetsInlineLimit: 100000000, // Increase inline limit to a large number to inline most assets
    cssCodeSplit: false, // Disable CSS code splitting; bundle all CSS into one file
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test_src/setupTests.ts"],
    coverage: {
      provider: "istanbul", //this excludes interface/type declarations from coverage
      reporter: ["text", "html"],
    },
  },
});
