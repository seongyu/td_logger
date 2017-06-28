var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var port = 80;
var app = express();

// td.trackEvent('click')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var n = 0;

app.use(function(req,res,next){
  var log_param = {
      host: req.headers.origin,
      url : req.url,
      method : req.method,
      get_data : JSON.stringify(req.query),
      post_data : JSON.stringify(req.body),
      req_count : n
  };
  logger.emit('server', log_param);
  next();
});

app.get('/', function(req,res,next){
    res.render('index', { title: 'Express' });
});
app.post('/',function(req,res,next){
  res.send({status:'success',message:'Successfully sent...'});
});
app.get('/no1', function(req,res,next){
    res.render('no1', { title: 'Express' });
});
app.get('/no2', function(req,res,next){
    res.render('no2', { title: 'Express' });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

app.listen(port,function(){
  console.log("client started with : "+port);
});