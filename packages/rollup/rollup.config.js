import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';

import pkg from './package.json';

const external = Object.keys(pkg.dependencies);

export default {
  input: 'src/index.js',
  external,
  output: {
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    format: 'umd',
    file: 'build/index.js',
    sourceMaps: true
  },
  plugins: [
    resolve({
      jsnext: true,
      browser: true,
      main: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      presets: [
        "@babel/preset-react",
        [
          "@babel/preset-env",
          {
            "targets": {
              "esmodules": true
            }
          }
        ]
      ],
      exclude: 'node_modules/**'
    }),
    serve('build'),
  ]
}
