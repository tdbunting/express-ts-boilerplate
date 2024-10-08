import express from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';
import session from 'express-session';
import cors from 'cors';
import logger from 'morgan';
import { errorHandler } from './middlewares/errorHandler'
import { NotFoundError } from './errors/NotFoundError';

import indexRouter from './routers/index';

const app = express();
const routerPath = '/.netlify/functions/server';

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret: 'sdg session',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
}));

// cors
// - origin should be set to any domain that is allowed to make a request to our api
// - origin can be an array if multiple domains should be whitelisted
const corsOpts = {
  origin: '*',
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors(corsOpts));

// Route initialization
app.use('/', indexRouter);
app.use(routerPath, indexRouter);

// Register Error Handlers
app.all('*', (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export default app;