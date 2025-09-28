import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // "stories": [
  //   "../src/**/*.mdx",
  //   "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  // ],
  stories: ['../src/components/**/*.stories.@(ts|tsx)'],
  "addons": [
    "@storybook/preset-create-react-app",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  "staticDirs": [
    "../public"
  ]
};
export default config;