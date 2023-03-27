import express from 'express';
import path from 'path';
import newRouter from './routes/new';
import indexRouter from './routes/index';

const app = express();
const port = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/new', newRouter);

app.listen(port);

console.log(`App is running on http://localhost:${port}`);
