import globals from "globals";
import pluginJs from "@eslint/js";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsEslintParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier"; // Updated import for the plugin
import prettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // Files to lint
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],

    // Global settings for browser environment and TypeScript parser
    languageOptions: {
      globals: globals.browser,
      parser: tsEslintParser,
    },

    // Plugin-specific configurations manually included
    plugins: {
      "@typescript-eslint": tsEslintPlugin,
      react: pluginReact,
      prettier: prettierPlugin, // Add prettier as a plugin
    },

    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },

    // Directly including the rules from recommended configurations
    rules: {
      // ESLint core rules
      ...pluginJs.configs.recommended.rules,
      // TypeScript plugin rules
      ...tsEslintPlugin.configs.recommended.rules,
      // React plugin rules
      ...pluginReact.configs.recommended.rules,

      // Custom rules
      "react/react-in-jsx-scope": "off", // Disable the rule if using React 17+ JSX runtime
      semi: ["error", "always"], // Enforce semicolons
      "@typescript-eslint/no-unused-vars": ["warn"], // Warn for unused variables
      quotes: ["error", "single"], // Enforce single quotes
      "no-unused-vars": "off", // Disable ESLint no-unused-vars in favor of @typescript-eslint/no-unused-vars

      // TypeScript-specific rules
      "@typescript-eslint/ban-ts-comment": "warn", // Example of a TypeScript-specific rule

      // Correct Prettier configuration with only severity ("warn" or "error")
      "prettier/prettier": ["warn"], // Correctly configured rule
    },
  },

  // Prettier config to disable conflicting ESLint rules
  prettier,
];
