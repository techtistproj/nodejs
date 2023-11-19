const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('<h1>Hello, Node Js!</h2>');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
