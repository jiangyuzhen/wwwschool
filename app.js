var express = require('express');
var app = express();
module.exports = {
  app: app,
  static: express.static,
  router: express.Router()
};
