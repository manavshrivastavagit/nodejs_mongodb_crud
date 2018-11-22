var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth')

var indexRouter = require('./routes/index');
var commodityRouter = require('./routes/commodity');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://user:password123@ds115094.mlab.com:15094/commodity';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Basic Auth
app.use(basicAuth({
    users: { 'admin': 'supersecret' },
    unauthorizedResponse: getUnauthorizedResponse
}))

function getUnauthorizedResponse(req) {
  return req.auth
      ? ('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected')
      : 'No credentials provided for basic auth'
}

app.use('/', indexRouter);
app.use('/commodity', commodityRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
