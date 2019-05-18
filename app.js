const express = require('express');

const app = express();

app.use('/', express.static('static'));

app.listen(8081, () => {
  console.log('UI Listening on 8081');    
});