import express from 'express';
import path from 'path';

const app = express();

/**
 * Set up styles and EJS templating engine.
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use('/public',express.static(path.join(__dirname, 'static')));

/**
 * Initialize App routes.
 */
app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));

app.listen(3000);