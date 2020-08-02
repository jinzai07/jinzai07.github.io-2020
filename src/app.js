import express from 'express';
import path from 'path';
import index from './routes/home';
import about from './routes/about';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use('/', index);
app.use('/about', about);

app.listen(3000);