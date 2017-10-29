const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

app.use(express.static(__dirname, 'dist'));

app.get('*', function (req, res) {
  res.sendFile(__dirname + 'dist/index.html');
});

const port = process.env.PORT || '5000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('Running! (step 3b fired)'));

