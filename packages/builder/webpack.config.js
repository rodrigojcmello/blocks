const path = require('path');
const { ProgressPlugin, HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = (environment) => {
  const production = environment?.NODE_ENV === 'production';

  // eslint-disable-next-line no-console
  console.log(`MODE: ${production ? 'PRODUCTION' : 'DEVELOPMENT'}`);

  return {
    entry: './src/app.tsx',
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
    },
    // target: 'node',
    // // node: {
    // //   fs: 'empty',
    // // },
    mode: production ? 'production' : 'development',
    devtool: 'source-map',
    ...(production
      ? {}
      : {
          devServer: {
            historyApiFallback: true,
            hot: true,
            hotOnly: true,
            writeToDisk: true,
          },
        }),
    plugins: [
      // HTML Template. Default: src/index.ejs
      new HtmlWebpackPlugin(),

      // Detect modules with circular dependencies
      new CircularDependencyPlugin({
        onDetected({ paths, compilation }) {
          compilation.errors.push(new Error(paths.join(' -> ')));
        },
      }),

      // Clean build folder
      production && new CleanWebpackPlugin(),

      // Show progress build in terminal
      !production && new ProgressPlugin(),

      // Fast Refresh
      !production && new HotModuleReplacementPlugin(),
      !production && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.([jt])sx?$/,
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
                  !production && require.resolve('react-refresh/babel'),
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
