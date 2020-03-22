require('dotenv').config();

import React from 'react';
import express from 'express';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import readAssets, { renderCssToString, renderJsToString } from 'read-assets';

import App from './App';

const app = express();

app.use('/api/health', (req, res) => res.json({ status: true }));

const staticPath = path.resolve(__dirname, './client');

app.use('/favicon.ico', (req, res) => res.end(''));

app.use('/static', express.static(staticPath));

app.use('/assets.json', async (req, res) => {
  console.log('reading assets');
  return res.json(await readAssets(staticPath, { staticPath: '/static' }))
});

app.use('', async (req, res) => {
  const { css, js } = await readAssets(staticPath, { staticPath: '/static' });
  const markup = process.env.USE_SSR === 'true'
    ? ReactDOMServer.renderToString(React.createElement(App))
    : 'Loading...';
  res.status(200).end(`
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>React Demo</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${renderCssToString(css)}
    </head>

    <body>
        <div id="root">
          ${markup}
        </div>
         ${renderJsToString(js)}
    </body>
</html>

  `);
});

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('server running on port 3000');
  }
});
