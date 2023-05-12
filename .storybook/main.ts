import type { StorybookConfig } from '@storybook/react-webpack5';
const path = require('path');

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (rollupConfig) => {
    if(rollupConfig.resolve?.alias) {
      rollupConfig.resolve.alias = {
        ...rollupConfig.resolve?.alias,
        "@components": path.resolve(__dirname, "../src/components/"),
        "@constants": path.resolve(__dirname, "../src/constants/"),
        "@hooks": path.resolve(__dirname, "../src/hooks/"),
        "@styles": path.resolve(__dirname, "../src/styles/"),
        "@types": path.resolve(__dirname, "../src/types/"),
        "@utils": path.resolve(__dirname, "../src/utils/"),
      }
    }

    return rollupConfig;
  }
};
export default config;
