const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const brand = process.env.STORYBOOK_THEME || 'default';

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss"
  ],
  typescript: {
    reactDocgen: false,
    reactDocgenTypescriptOptions: {
      tsconfigPath: '../tsconfig.json'
    }
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    config.module.rules = config.module.rules.map(rule => {
      if (rule.test.test('.scss')) {
        rule.use[2].options = {
          additionalData: `
                @import "~@heatmaps/design/dist/themes/${brand}.css";
            `
        };
      }
      return rule;
    });
    return config;
  },
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-webpack5"
  }
}