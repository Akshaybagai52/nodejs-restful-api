var express = require('express');
var app = express();
var db = require('./db');
console.log(db.then((res) => {
    return res
}))
var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);
module.exports = app;

var UserController = require('./user/UserController');
app.use('/users', UserController);

module.exports = app;