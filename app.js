 var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var index = require('./routes/index');
var users = require('./routes/users');
var userflag = require('./routes/userflag');
var questions = require('./routes/questions');
var questionjoin = require('./routes/questionjoin');
var answerjoin = require('./routes/answerjoin');
var answerflag = require('./routes/answerflag');
var answers = require('./routes/answers');
var blogs = require('./routes/blogs');
var blogjoin = require('./routes/blogjoin');
var blogflag = require('./routes/blogflag');
var courses = require('./routes/courses');

var groups = require('./routes/groups');
var groupjoin = require('./routes/groupjoin');
var news = require('./routes/news');
var newsjoin = require('./routes/newsjoin');
var notes = require('./routes/notes');
var notesjoin = require('./routes/notesjoin');
var subjects = require('./routes/subjects');
var subjectjoin = require('./routes/subjectjoin');

var answerbyquestionid = require('./routes/answerbyquestionid');

//var answers_likes = require('./routes/answers_likes');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/userflag', userflag);
app.use('/questions',questions);
app.use('/questionjoin',questionjoin);
app.use('/answerjoin',answerjoin);
app.use('/answers',answers);
app.use('/answerflag',answerflag);
app.use('/blogs',blogs);
app.use('/blogjoin',blogjoin);
app.use('/blogflag',blogflag);
app.use('/notes',notes);
app.use('/notesjoin',notesjoin);
app.use('/courses',courses);

app.use('/groups',groups);
app.use('/groupjoin',groupjoin);
app.use('/news',news);
app.use('/newsjoin',newsjoin);
app.use('/subjects',subjects);
app.use('/subjectjoin',subjectjoin);

app.use('/answerbyquestionid',answerbyquestionid);



//app.use('/answers_likes',answers_likes);


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

module.exports = app;
