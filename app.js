const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//ejs view engine setup
app.set('views', './views');
app.set('view engine', 'ejs')


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (_, res) => {
  res.render('index')
})

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`)
})