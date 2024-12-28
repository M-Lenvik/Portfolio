import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      camelcase: "error",
      "comma-dangle": ["error", "always-multiline"], // Enforce trailing commas in multiline
      curly: ["error", "all"], // Require curly braces for all control statements
      "no-console": "warn", // Warn about console.log usage
    },
  },
  pluginJs.configs.recommended,
  eslintConfigPrettier
];
