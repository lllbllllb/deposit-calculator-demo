const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

app.use(express.static('dist'));

app.get('*', function (req, res) {
  // res.sendFile('index.html');
  res.sendFile(path.join(__dirname + '/index.html'));
});

const port = process.env.PORT || '5000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('Running! (step 3b fired)'));

