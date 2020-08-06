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
app.get('/', async (req, res) => {
  const navLinks = ['Awards', 'About', 'Contact'];
  const quoteApi = 'https://quotes.rest/qod';
  const quoteRequest = await axios.get(quoteApi);
  const quoteResponse = {
    quote: quoteRequest.data.contents.quotes[0].quote,
    author: quoteRequest.data.contents.quotes[0].author
  }

  return res.render('index', { navLinks, quoteResponse });
});
app.get('/about', (req, res) => res.render('about'));

app.listen(3000);