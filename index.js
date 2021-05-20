const express = require('express');
const app = express()
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/work', (req, res) => {
    res.render('work')
});

app.get('/contact', (req, res) => {
    res.render('contact')
});

app.use(express.static(__dirname + '/public'));

app.listen(8080, () => {
    console.log('The web server has started on port 8080');
});
