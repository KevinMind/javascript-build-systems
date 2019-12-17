import React from 'react';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { renderToString } from 'react-dom/server';

export const getMarkup = (req, context) => renderToString(
  <StaticRouter context={context} location={req.url}>
    <App />
  </StaticRouter>
);

export default getAssets => (req, res) => {
  const assets = getAssets(req);
  const markup = getMarkup(req, {});

  return res.status(200).send(
    `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
      assets.client.css
        ? `<link rel="stylesheet" href="${assets.client.css}">`
        : ''
      }
        ${
      process.env.NODE_ENV === 'production'
        ? `<script src="${assets.client.js}" defer></script>`
        : `<script src="${assets.client.js}" defer crossorigin></script>`
      }
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
    </html>
  `);
};
