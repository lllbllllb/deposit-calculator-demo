const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

console.log('!!!!!!!!!!!!!!!!!!!!!!' + __dirname + '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function (req, res) {
console.log('!!!!!!!!!!!!!!!!!!!!!!' + __dirname + '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

  res.sendFile(path.join(__dirname + 'dist/index.html'));
});

const port = process.env.PORT || '5000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('Running! (step 3b fired)'));

