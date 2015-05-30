var express = require('express');
var http = require('http');
var path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var js2xmlparser = require("js2xmlparser");
var fs = require('fs');

// Start express application
var app = express();

/*MySql connection*/
var connection = require('express-myconnection'),
    mysql = require('mysql');

//Database connection details
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'test'
});
connection.query('USE lawyer_doc_store');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.session({ secret: 'securedsession' }));
app.use(passport.initialize()); // Add passport initialization
app.use(passport.session());    // Add passport initialization
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

//==================================================================
// Define the strategy to be used by PassportJS
passport.use(new LocalStrategy(
    function (username, password, done) {
        
        var query = "SELECT * FROM users where UserName = '" + username + "' and Password = '" + password + "'";
        
        connection.query(query, function (err, rows) {
            if (err)
                return done(err);
            if (!rows.length) {
                //return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
                return done(null, false, { message: 'No user found.' });
            }
            
            // if the user is found but the password is wrong
            if (!(rows[0].Password == password))
                //return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
                return done(null, false, { message: 'Oops! Wrong password.' });
            
            // all is well, return successful user
            
            //return done(null, rows[0]);
            return done(null, { name: username });


        });
        
        //if (username === "admin" && password === "admin") // stupid example
        //    return done(null, { name: "admin" });
        
        //return done(null, false, { message: 'Incorrect username.' });
    }
));

// Serialized and deserialized methods when got from session
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

// Define a middleware function to be used for every secured routes
var auth = function (req, res, next) {
    if (!req.isAuthenticated())
        res.send(401);
    else
        next();
};
//==================================================================
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

// route to test if the user is logged in or not
app.get('/loggedin', function (req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
});

// route to log in
app.post('/login', passport.authenticate('local'), function (req, res) {
    res.send(req.user);
});

//==================================================================
// routes
app.get('/', function (req, res) {
    res.render('index');
});
