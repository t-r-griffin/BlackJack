const express = require('express');
const fs = require('fs');
const https = require('https');

const app = express();

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
https
  .createServer(
    {
      key: fs.readFileSync('server.key'),
      cert: fs.readFileSync('server.cert'),
    },
    app
  )
  .listen(PORT);
