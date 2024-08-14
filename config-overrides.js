const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    https: require.resolve('https-browserify'),
    http: require.resolve('stream-http'),
    url: require.resolve('url'),
    stream: require.resolve('stream-browserify'),
    process: require.resolve('process/browser.js'), // Added .js extension
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser.js', // Added .js extension
      Buffer: ['buffer', 'Buffer']
    })
  ]);

  return config;
};
