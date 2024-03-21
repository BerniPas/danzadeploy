const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('node:path'); 
const hbs = require('hbs');
const contactosRouter = require('./routes/contactosRouter');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(cors());
app.use(morgan('dev'));

app.use('/api/contactos', contactosRouter)

app.get('/', (req, res) => {
    res.render('index', {
        style: 'index.css'
    });
});

app.get('/*', (req, res) => {
    res.render('error', {
        style: 'index.css'
    });
});


module.exports = app;