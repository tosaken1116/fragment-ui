module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:storybook/recommended",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:jsx-a11y/recommended",
        "prettier",
        "plugin:storybook/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
    },
    plugins: [
        "react",
        "react-refresh",
        "import",
        "unused-imports",
        "jsx-a11y",
        "@typescript-eslint",
    ],
    rules: {
        "@typescript-eslint/explicit-function-return-type": "error",
        "arrow-body-style": ["error", "as-needed"],
        "prefer-template": "warn",
        "prefer-arrow-callback": "warn",
        "unused-imports/no-unused-imports": "error",
        "react/jsx-boolean-value": "error",
        "react/jsx-curly-brace-presence": "error",
        "react/self-closing-comp": [
            "error",
            {
                component: true,
                html: true,
            },
        ],
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
        "react/jsx-filename-extension": [
            "error",
            {
                extensions: [".js", ".jsx", "ts", "tsx"],
            },
        ],
        "react/function-component-definition": "off",
        "import/order": [
            "error",
            {
                groups: [
                    "builtin",
                    "external",
                    "parent",
                    "sibling",
                    "index",
                    "object",
                    "type",
                ],
                pathGroups: [
                    {
                        pattern: "{react,react-dom/**,react-router-dom}",
                        group: "builtin",
                        position: "before",
                    },
                    {
                        pattern: "@src/**",
                        group: "parent",
                        position: "before",
                    },
                ],
                pathGroupsExcludedImportTypes: ["builtin"],
                alphabetize: {
                    order: "asc",
                },
                "newlines-between": "always",
            },
        ],
        "@typescript-eslint/consistent-type-imports": [
            "error",
            {
                prefer: "type-imports",
            },
        ],
    },
};
