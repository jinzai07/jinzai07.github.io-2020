import express from 'express';
import path from 'path';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));

app.listen(3000);