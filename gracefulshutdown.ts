import express from 'express';

const app = express();

app.get('/', async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  res.send('Hello World!');
});

const server = app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

const signals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM', 'SIGQUIT'];

signals.forEach((signal) => {
  process.on(signal, () => {
    console.info(`${signal} signal received.`);
    console.log('Closing http server.');
    server.close(() => {
      console.log('Http server closed.');
    });
  });
});
