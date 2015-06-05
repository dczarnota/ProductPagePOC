// Require our dependencies
var express = require('express'),
  exphbs = require('express-handlebars'),
  http = require('http'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  log = require('./Utils/logger'),
  reqLogger = require('morgan');
  /**
   * Modules required
   */
var productRoute = require('./Routes/productRoute');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 3000;


app.use(reqLogger('dev'));
// Set handlebars as the templating engine

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('views',path.join(__dirname + '/views/'));
app.set('view engine', 'handlebars');

// Disable etag headers on responses
app.disable('etag');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public/')));

// Isomorphic Route

app.use("/", productRoute)

var server = http.createServer(app).listen(port, function() {
  var addr = server.address();
  log.info('App starting on : '+addr.address + ' Listening on port :' + addr.port);
});