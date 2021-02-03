const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env = { NODE_ENV: 'development' }) => {
  const prod = env.NODE_ENV === 'production';

  // eslint-disable-next-line no-console
  console.log(`MODE: ${prod ? 'PRODUCTION' : 'DEVELOPMENT'}`);

  return {
    entry: './src/app.tsx',
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode: prod ? 'production' : 'development',
    devtool: 'source-map',
    ...(prod
      ? {}
      : { devServer: { historyApiFallback: true, hot: true, hotOnly: true } }),
    plugins: [
      // HTML Template
      new HtmlWebpackPlugin({ template: './index.html' }),

      // Clean old build
      prod && new CleanWebpackPlugin(),

      // Show progress build in terminal
      !prod && new webpack.ProgressPlugin(),

      // Fast Refresh
      !prod && new webpack.HotModuleReplacementPlugin(),
      !prod && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.([tj])sx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: 'last 1 chrome version' }],
                  [
                    '@babel/preset-react',
                    {
                      // Removes the need to import React into JSX files
                      runtime: 'automatic',
                    },
                  ],
                  '@babel/preset-typescript',
                ],
                plugins: [
                  // Fast Refresh
                  !prod && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
                cacheDirectory: true,
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|woff2?|eot|otf|webp)$/i,
          use: 'file-loader',
        },
      ],
    },
  };
};
