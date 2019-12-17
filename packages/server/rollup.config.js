require('dotenv').config();

import run from '@rollup/plugin-run';
import pkg from './package.json';

const external = Object.keys(pkg.dependencies);

const plugins = [
];

export default {
  input: 'src/index.js',
  external,
  output: {
    file: 'static/index.js',
    format: 'umd',
    sourcemap: true
  },
  plugins: [
    ...plugins,
    run(),
  ]
};
