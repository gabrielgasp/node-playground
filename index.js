const express = require('express');

const app = express();

app.get('/api/:id/test', (req, res) => res.send('1'))

app.get('/api/2/teste', (req, res) => res.send('2'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))