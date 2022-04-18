 var express = require('express');
 var path = require('path');
 var logger = require('morgan');
 var expressValidator = require('express-validator');
 var flash = require('express-flash');
 var bodyParser = require('body-parser');
 var indexRouter = require('./routes/index');
 
 var app = express();
 app.use('/', indexRouter);

// view engine setup
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'ejs');
 
 app.use(logger('dev'));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(express.static(path.join(__dirname, 'public')));
 
 app.use(flash());
 app.use(expressValidator);
 
 app.use('/', indexRouter);

 module.exports = app;