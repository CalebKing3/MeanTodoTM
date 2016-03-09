'use strict';

var express = require('express');

var router = require('./api');

var app = express();

require('./database');

app.use('/', express.static('public'));

app.use('/api', router);

app.listen(1738, function(){
  console.log("The server is running and Fetty Wap is singing!");
});
