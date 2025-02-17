const express = require('express');
const path = require('path');

const app = express();
const port = 3010;

const flowers = [
  { name: "Rózsa", category: "évelő" },
  { name: "Tulipán", category: "egyetlenéves" },
  { name: "Kála", category: "szobanövény" },
];

const trees = [
  { name: "Tölgy", category: "lombhullatú" },
  { name: "Fenyő", category: "örökzöld" },
  { name: "Nyár", category: "lombhullatú" },
];


app.get('/', (req, res) => {
  res.send('<h1>Üdvözlünk a Növények Weboldalán!</h1>');
});


app.get('/flowers', (req, res) => {
  res.json(flowers);
});


app.get('/trees', (req, res) => {
  res.json(trees);
});


app.get('/404', (req, res) => {
  res.sendFile(path.join(__dirname, '404.html'));
});


app.use((req, res) => {
  res.status(404).send('<h1>404 - Az oldal nem található</h1>');
});


app.listen(port, () => {
  console.log(`A szerver a http://localhost:${port} címen fut.`);
});
