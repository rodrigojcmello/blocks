const path = require('path');
const { ProgressPlugin, HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
// const Style9Plugin = require('style9/webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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

      // new Style9Plugin(),
      new MiniCssExtractPlugin(),

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
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            type: 'css/mini-extract',
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.([jt])sx?$/,
          use: [
            // Style9Plugin.loader,
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
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|woff2?|eot|otf|webp)$/i,
          use: 'file-loader',
        },
      ],
    },
  };
};
