require('dotenv').config();

const path = require('path');

const {
  NODE_ENV = 'development',
  BUILD_PATH = 'dist',
  ROOT_PATH = process.cwd(),
  IS_DEBUG = false,
} = process.env;

const IS_PROD = NODE_ENV === 'production';
const MODE = IS_PROD ? 'production': 'development';

console.log({ NODE_ENV, BUILD_PATH, ROOT_PATH, IS_DEBUG });

module.exports = {
  entry: './src/server.js',
  output: {
    filename: 'index.js',
    path: path.join(ROOT_PATH, BUILD_PATH),
  },
  node: {
    fs: 'empty',
    net:  'empty',
  },
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ]
          }
        }
      },
      {
        test: /\.(scss|css|sass)$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
};
