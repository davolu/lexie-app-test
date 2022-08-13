import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const routes = require('./routes');
require('dotenv').config();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes)
 
export default app;