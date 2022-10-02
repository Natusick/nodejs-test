const express = require('express');
const app = express();

const contacts = require("./contacts.json");

app.get('/', (req, res) => {
  res.send('<h2>Hello World!</h2>');
});

app.get('/contacts', (req, res) => {
  res.json(contacts)
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});