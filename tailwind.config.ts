// Import the Config type from the Tailwind CSS library
import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

// Define the Tailwind CSS configuration
const config: Config = {
  // Specify the paths to all of the template files in the project. Tailwind CSS will scan these files to generate the necessary styles.
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // All JavaScript, TypeScript, JSX, TSX, and MDX files in the pages directory
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // All JavaScript, TypeScript, JSX, TSX, and MDX files in the components directory
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // All JavaScript, TypeScript, JSX, TSX, and MDX files in the app directory
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // All JavaScript, TypeScript, JSX, and TSX files in the NextUI theme directory
  ],
  // Extend the default theme
  theme: {
    extend: {},
  },
  darkMode: 'class',
  // Specify the plugins to be used (none in this case)
  plugins: [nextui()],
};

// Export the configuration as the default export
export default config;
