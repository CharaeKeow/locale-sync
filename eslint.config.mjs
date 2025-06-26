import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  eslint.configs.recommended,
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),

  // Import order configuration
  {
    rules: {
      // Enforce type imports
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: true,
        },
      ],

      // Prevent importing from the same module multiple times
      "import/no-duplicates": "error",
    },
  },
];

export default eslintConfig;
