import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const routes = require('./routes')
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes)

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});