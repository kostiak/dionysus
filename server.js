
// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database


require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms


// required for passport
app.use(session({ secret: 'MjJlZTE3MjMyMTAyYjUyNjI4NzEwODgx' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
//app.use(isLoggedIn);
app.use(express.static(__dirname + '/public'));



// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);

/*
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    //console.log(req.isAuthenticated());
    //if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    //res.redirect('/');
}
*/