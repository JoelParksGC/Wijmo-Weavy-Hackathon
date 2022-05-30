const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();

const config = require('../webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

const loginRoutes = require('./routes/login');
const controlRoutes = require('./routes/controls');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, '../static')));

app.use(loginRoutes);
app.use(controlRoutes);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});