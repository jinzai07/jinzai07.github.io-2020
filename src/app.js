import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

import { navLinks } from '../src/shared/constants/navigation-links'
import { generateQuote } from './shared/extensions/random-quote-generator';
import { sendEmail } from './shared/extensions/send-mail';

const app = express();

/**
 * Set up styles and EJS templating engine.
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use('/public',express.static(path.join(__dirname, 'static')));

//Custom middlewares
/**
 * Get random quote, appends in app.get('quote')
 */
app.use(generateQuote);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Available Routes
app.get('/', async (req, res) => res.render('index', {
  navLinks,
  quoteResponse: app.get('quote'),
  title: 'Home'
}));

app.get('/about', (req, res) => res.render('about', {
  navLinks,
  quoteResponse: app.get('quote'),
  title: 'About'
}));

app.get('/contact', (req, res) => res.render('contact', {
    param: req.query.message,
    navLinks,
    quoteResponse: app.get('quote'),
    title: 'Contact Me'
  }));

app.post('/send-mail', sendEmail);

app.get('*', (req, res) => res.redirect('/'));

app.listen(3000);