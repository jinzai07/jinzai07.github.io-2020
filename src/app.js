import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

import { generateQuote } from './shared/extensions/random-quote-generator';
import { sendEmail } from './shared/extensions/send-mail';

import { AWARDS } from './shared/constants/awards';
import { NAV_LINKS } from '../src/shared/constants/navigation-links'
import { SKILLS } from './shared/constants/skills';


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
  navLinks: NAV_LINKS,
  quoteResponse: app.get('quote'),
  title: 'Home'
}));

app.get('/about', (req, res) => res.render('about', {
  navLinks: NAV_LINKS,
  quoteResponse: app.get('quote'),
  title: 'About'
}));

app.get('/contact', (req, res) => res.render('contact', {
    param: req.query.message,
    navLinks: NAV_LINKS,
    quoteResponse: app.get('quote'),
    title: 'Contact Me'
}));

app.get('/awards', (req, res) => res.render('awards', {
  navLinks: NAV_LINKS,
  quoteResponse: app.get('quote'),
  title: 'Awards',
  awards: AWARDS
}));

app.get('/skills', (req, res) => res.render('skills', {
  navLinks: NAV_LINKS,
  quoteResponse: app.get('quote'),
  title: 'Skills',
  skills_1: SKILLS.filter(skill => skill.type === 1),
  skills_2: SKILLS.filter(skill => skill.type === 2),
  skills_3: SKILLS.filter(skill => skill.type === 3),
  skills_4: SKILLS.filter(skill => skill.type === 4),
}));

//contact-us page
app.post('/send-mail', sendEmail);

//route wildcard
app.get('*', (req, res) => res.redirect('/'));

app.listen(3000);