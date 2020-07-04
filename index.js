const express = require('express');
const http = require('http');
const enforce = require('express-sslify');
const fs = require('fs');

const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');

const app = express();

const server = http.createServer({ key: key, cert: cert }, app);

//app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.use(express.static('client/build'));

// Express will serve up the index.html file
// if it doesn't recognize the route
const path = require('path');

app.get('/serviceWorker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'sw.js'));
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT);
