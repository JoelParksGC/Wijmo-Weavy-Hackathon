const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();

const config = require('../webpack.config.js');

const loginRoutes = require('./routes/login');
const controlRoutes = require('./routes/controls');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../public')));

app.use(loginRoutes);
app.use(controlRoutes);

app.listen(3000);