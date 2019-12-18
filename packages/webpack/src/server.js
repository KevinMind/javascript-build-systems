import express from 'express';

const app = express();

app.use('/static', express.static(__dirname, '../build'));

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  }
  return console.log('app run on port: ', 3000);
});
