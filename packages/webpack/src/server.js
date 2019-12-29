import express from 'express';
import path from 'path';
import readAssets, { renderJsToString } from 'read-assets';

const app = express();

app.use('/api/health', (req, res) => res.json({ status: true }));

const staticPath = path.join(process.cwd(), process.env.BUILD_PATH, './client');

app.use('/favicon.ico', (req, res) => res.end(''));

app.use('/static', express.static(staticPath));

app.use(async (req, res) => {
  try {
    const { js } = await readAssets(staticPath, { staticPath: '/static' });
    return res.status(200).end(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <title>React Demo</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
    
        <body>
            <div id="root">
            App
            </div>
            ${renderJsToString(js)}
        </body>
    </html>
    `);
  } catch (e) {
    console.log(e);
    return res.status(500).end('');
  }
});

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  }
  return console.log('app run on port: ', 3000);
});

if (module.hot) {
  module.hot.accept();
}
