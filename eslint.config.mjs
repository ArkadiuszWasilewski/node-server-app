// eslint.config.mjs
import { FlatCompat } from "@eslint/eslintrc";
import eslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

const compat = new FlatCompat();

export default [
  {
    files: ["**/*.ts"],
    ignores: ["node_modules/**", "dist/**"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json", // Ensure this points to your TypeScript config
      },
    },
    plugins: {
      "@typescript-eslint": eslintPlugin,
    },
    rules: {
      ...eslintPlugin.configs.recommended.rules,
      // Add any custom rules here
    },
  },
];