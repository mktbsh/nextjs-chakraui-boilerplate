const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
  typescript: {
    check: false,
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
      '@emotion/core': path.resolve(__dirname, '../node_modules/@emotion/react'),
      'emotion-theming': path.resolve(__dirname, '../node_modules/@emotion/react'),
    }
    return config
  },
}
