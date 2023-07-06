const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../templates/views'));

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/weather', (req, res) => {
    res.render('weather');
})

app.listen(PORT);