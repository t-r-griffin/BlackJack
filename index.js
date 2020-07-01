const express = require('express');
const http = require('http');
const enforce = require('express-sslify');

const app = express();

app.use(enforce.HTTPS({ trustProtoHeader: true }));

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
http.createServer(app).listen(PORT);
