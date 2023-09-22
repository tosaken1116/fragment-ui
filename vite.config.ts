import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
    test: {
        globals: true,
        environment: "happy-dom",
        // setupFiles: "./vitest.setup.ts",
    },
    css: {
        modules: {
            localsConvention: "camelCase",
        },
    },
    plugins: [react(), vanillaExtractPlugin()],
});
