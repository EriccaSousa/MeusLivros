const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

require('./db/mongoConnection');

const users = require('./routes/users');
const usuarios = require('./routes/usuarioRoutes');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use('/api/v1/users', users)
app.use('/usuarios', usuarios);

module.exports = app
