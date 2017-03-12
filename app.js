var express = require('express');
//Init App
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var path = require('path');
var cookieParser = require('cookie-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');


// Set static folder
app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Compte =require('./models/compte');
Article =require('./models/article');
User =require('./models/user');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/kcbankdb');
var db = mongoose.connection;

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());


// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});



app.get('/', (req, res) => {
	res.send('Please use /articles or /users');
});

app.get('/api/comptes', (req, res) => {
	Compte.getComptes((err, comptes) => {
		if(err){
			throw err;
		}
		res.json(comptes);
	});
});

app.get('/api/comptes/:_id', (req, res) => {
	Compte.getCompteById(req.params._id, (err, compte) => {
		if(err){
			throw err;
		}
		res.json(compte);
	});
});

app.post('/api/comptes', (req, res) => {
	var compte = req.body;
	Compte.addCompte(compte, (err, compte) => {
		if(err){
			throw err;
		}
		res.json(compte);
	});
});

app.put('/api/comptes/:_id', (req, res) => {
	var id = req.params._id;
	var compte = req.body;
	Compte.updateCompte(id, compte, {}, (err, compte) => {
		if(err){
			throw err;
		}
		res.json(compte);
	});
});

app.delete('/api/comptes/:_id', (req, res) => {
	var id = req.params._id;
	Compte.removeCompte(id, (err, compte) => {
		if(err){
			throw err;
		}
		res.json(compte);
	});
});

app.get('/api/articles', (req, res) => {
	Article.getArticles((err, articles) => {
		if(err){
			throw err;
		}
		res.json(articles);
	});
});

app.get('/api/articles/:_id', (req, res) => {
	Article.getArticleById(req.params._id, (err, article) => {
		if(err){
			throw err;
		}
		res.json(article);
	});
});

app.post('/api/articles', (req, res) => {
	var article = req.body;
	Article.addArticle(article, (err, article) => {
		if(err){
			throw err;
		}
		res.json(article);
	});
});

app.put('/api/articles/:_id', (req, res) => {
	var id = req.params._id;
	var article = req.body;
	Article.updateArticle(id, article, {}, (err, article) => {
		if(err){
			throw err;
		}
		res.json(article);
	});
});

app.delete('/api/articles/:_id', (req, res) => {
	var id = req.params._id;
	Article.removeArticle(id, (err, article) => {
		if(err){
			throw err;
		}
		res.json(article);
	});
});

app.get('/api/users', (req, res) => {
	User.getUsers((err, users) => {
		if(err){
			throw err;
		}
		res.json(users);
	});
});

app.get('/api/users/:_id', (req, res) => {
	User.getUserById(req.params._id, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.post('/api/users', (req, res) => {
	var user = req.body;
	User.addUser(user, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.put('/api/users/:_id', (req, res) => {
	var id = req.params._id;
	var user = req.body;
	User.updateUser(id, user, {}, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.delete('/api/users/:_id', (req, res) => {
	var id = req.params._id;
	User.removeUser(id, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});



app.listen(3000);
console.log('Running on port 3000...');
