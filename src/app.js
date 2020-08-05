import express from 'express';
import path from 'path';
import axios from 'axios';

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
app.get('/', (req, res) => {
  const navLinks = ['Awards', 'About', 'Contact'];
  const quoteApi = 'https://quotes.rest/qod';
  return res.render('index', { navLinks, quote: 'Great ambition is the passion of a great character.  Those endowed with it may perform very good or very bad acts.  All depends on the principals which direct them.' });
  axios.get(quoteApi).then(quote => res.render('index', { navLinks, quote: quote.data.contents.quotes[0].quote }));
});
app.get('/about', (req, res) => res.render('about'));

app.listen(3000);