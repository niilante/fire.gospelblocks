// PACKAGES
const path = require('path');
const express = require('express');

// CREATE APP
const app = express();

// MIDDLEWARE
app.use(express.static(path.join(__dirname, 'build')));

// ROUTE
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080);
