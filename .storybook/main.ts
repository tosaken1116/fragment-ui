import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import { mergeConfig } from "vite";
const config: StorybookConfig = {
    stories: [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../README.mdx",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    core: {
        builder: "@storybook/builder-vite",
    },
    async viteFinal(config) {
        config!.resolve!.alias = {
            ...config!.resolve!.alias,
            "@": path.resolve(__dirname, "../src"),
        };
        return mergeConfig(config, {
            plugins: [
                require("@vanilla-extract/vite-plugin").vanillaExtractPlugin(),
            ],
        });
    },
};
export default config;
