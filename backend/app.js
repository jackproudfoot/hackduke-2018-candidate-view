var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var candidatesRouter = require('./routes/candidates')
var categoriesRouter = require('./routes/categories')
var authRouter = require('./routes/auth')
var ratingsRouter = require('./routes/ratings')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/candidates', candidatesRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/auth', authRouter);
app.use('/api/ratings', ratingsRouter);

//configure mongodb
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://127.0.0.1:27017/hackduke2018');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
	var candidateSchema = mongoose.Schema({
		name: String,
        age: Number,
        position: String,
        party: String,
        picture: String,
        approval: Number,
        ratings: Array
	});
	const Candidate = mongoose.model('Candidate', candidateSchema);
	
	var userSchema = mongoose.Schema({
		uid: String,
		ratings: Array,
		admin: Boolean
	});
	const User = mongoose.model('User', userSchema);
    
	var categorySchema = mongoose.Schema({
		category: String
	});
	const Category = mongoose.model('Category', categorySchema);

    /*var newCandidate = new Candidate({
		name: "Carmen Aida Lazo",
        age: 32,
        position: "Vice President",
        party: "Republican",
        picture: "./img/CarmenAidaLazo-VicePresident.png",
        approval: 3,
        ratings: [
            {category: "5bc334fcb61d9d84d35d17e9", ranking: 2}, 
            {category: "5bc334fcb61d9d84d35d17ea", ranking: 2}, 
            {category: "5bc334fcb61d9d84d35d17eb", ranking: 2}
        ]
	});

	newCandidate.save(function(err, newU) {
		if (err) return console.error(err);
		res.json(newU)
	});*/

})

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
