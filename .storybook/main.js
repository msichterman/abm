const { getStoriesPaths } = require('slice-machine-ui/helpers/storybook')

module.exports = {
  stories: [...getStoriesPaths(), '../styles/index.css'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
}
