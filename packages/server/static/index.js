(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('express'), require('path')) :
  typeof define === 'function' && define.amd ? define(['react', 'express', 'path'], factory) :
  (global = global || self, factory(global.react, global.express, global.path));
}(this, (function (react, express, path) { 'use strict';

  react = react && react.hasOwnProperty('default') ? react['default'] : react;
  express = express && express.hasOwnProperty('default') ? express['default'] : express;
  path = path && path.hasOwnProperty('default') ? path['default'] : path;

  const app = express();

  app.use('/rollup', express.static(path.resolve(__dirname, '../../rollup/static')));

  app.listen(3000, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('app started on port: ', 3000);
  });

})));
//# sourceMappingURL=index.js.map
