const express = require('express');

const app = express();

app.use(express.static('client/build'));

// Express will serve up the index.html file
// if it doesn't recognize the route
const path = require('path');

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'service-worker.js'));
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
