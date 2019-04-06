const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  /* res.send() sends whatever's inside the method to the browser
   with res.send() and the other variants we can server/ send:
    - json
    - render templates with res.render()
    - send files
    */
  res.sendFile(path.join(__dirname, '../', 'public', 'index.html'));
});