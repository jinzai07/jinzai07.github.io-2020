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
 * Get random quote, appends in app.get('quote')
 */
app.use(async (req, res, next) => {
  const quoteApi = 'https://quotes.rest/qod';
  const quote = app.get('quote');

  if (!quote) {
    // const quoteRequest = await axios.get(quoteApi);
    // const quoteResponse = {
    //   quote: quoteRequest.data.contents.quotes[0].quote,
    //   author: quoteRequest.data.contents.quotes[0].author
    // }

    const quoteResponse = {
      quote: 'I think it is often easier to make progress on mega-ambitious dreams. Since no one else is crazy enough to do it, you have little competition. In fact, there are so few people this crazy that I feel like I know them all by first name.',
      author: 'Larry Page'
    }
    app.set('quote', quoteResponse);
  }
  next();
});

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
  navLinks,
  quoteResponse: app.get('quote'),
  title: 'Contact Me'
}));

app.get('*', (req, res) => res.redirect('/'));

app.listen(3000);