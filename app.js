const express = require('express');
const app = express();
const pug = require('pug')
const port = 3000;

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.static('css'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Portfolio' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
