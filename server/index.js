require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const path = require('path');
const morgan = require('morgan');
const router = require('./routes/routes.js');

// const controllers = require('./controllers/controller.js');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', router);

app.get('/loaderio-0b69af2db03fc5bf2d0e1024f9198549', (req, res) => {
  res.status(200).send('loaderio-0b69af2db03fc5bf2d0e1024f9198549');
});

app.listen(port, () => console.log(`listening on port ${port}`));
