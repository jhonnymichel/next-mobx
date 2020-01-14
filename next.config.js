const path = require('path');
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      pages: path.resolve(__dirname, 'pages'),
      store: path.resolve(__dirname, 'store'),
      styles: path.resolve(__dirname, 'styles')
    }

    return config;
  }
})
