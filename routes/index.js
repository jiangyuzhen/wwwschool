
const { app } = require('../app');
const users = require('./users');

app.use('/users', users);
module.exports = app;
