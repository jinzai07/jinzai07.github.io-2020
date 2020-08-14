import axios from 'axios';
import express from 'express';
import path from 'path';

import { navLinks } from '../src/shared/constants/navigation-links'

const app = express();

/**
 * Set up styles and EJS templating engine.
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use('/public',express.static(path.join(__dirname, 'static')));

//Custom middlewares

/**
 * Get random quote, appends in res.quote
 */
app.use(async (req, res, next) => {
  const quoteApi = 'https://quotes.rest/qod';

  // const quoteRequest = await axios.get(quoteApi);
  // const quoteResponse = {
  //   quote: quoteRequest.data.contents.quotes[0].quote,
  //   author: quoteRequest.data.contents.quotes[0].author
  // }
  const quoteResponse = {
    quote: 'Do not let what you cannot do interfere with what you can do.',
    author: 'John Wooden'
  }
  res.quote = quoteResponse;
  next();
});

//Available Routes
app.get('/', async (req, res) => res.render('index', {
  navLinks,
  quoteResponse: res.quote,
  title: 'Home'
}));

app.get('/about', (req, res) => res.render('about', {
  navLinks,
  quoteResponse: res.quote,
  title: 'About'
}));

app.get('*', (req, res) => res.redirect('/'));

app.listen(3000);