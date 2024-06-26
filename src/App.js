import express from 'express';
import Users from './Routes/Users.routes.js';
import History from './Routes/History.routes.js';
import morgan from 'morgan';
import path from 'path';

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(Users);
app.use(History);

app.use(express.static(path.join(__dirname, 'public')));

export default app;
