import React from 'react';
import express from 'express';
import path from 'path';

const app = express();

const renderAssets = () => {
  const manifest = require('rollup/static/assets.json');

  return Object.keys(manifest)
    .map((key) => {
      const value = manifest[key];
      if (value.includes('.js')) {
        return `<script src="${value}"></script>`
      }
    })
    .join('\n');
};

const renderHtml = (markup) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
  <title>app</title>
  </head>
  <body>
  ${markup}
  ${renderAssets()}
  </body>
  </html>
  `;
};

app.use('/rollup', express.static(path.resolve(__dirname, '../../rollup/static')));

app.listen(3000, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('app started on port: ', 3000);
});
