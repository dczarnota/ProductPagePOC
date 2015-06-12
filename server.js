require('node-jsx').install({ extension: '.jsx' });
var express = require('express'),
    exphbs = require('express-handlebars'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    log = require('./Utils/logger'),
    reqLogger = require('morgan');

var productRoute = require('./Routes/productRoute');
var appComponent = require('./app');
var htmlComponent = require('./Components/pp_pageApp.react');
var navigateAction = require('flux-router-component').navigateAction;
var serialize = require('serialize-javascript');
var React = require('react');
var serverActionCreators = require('./actions/ServerActionCreators');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 3000;

// Get access to the fetchr plugin instance
var fetchrPlugin = appComponent.getPlugin('FetchrPlugin');

// Register our REST service
fetchrPlugin.registerService(require('./services/ProductService'));

// Set up the fetchr server middleware
app.use(fetchrPlugin.getXhrPath(), fetchrPlugin.getMiddleware());

app.use(reqLogger('dev'));
// Set handlebars as the templating engine
app.set('views', path.join(__dirname,'./views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

// Disable etag headers on responses
app.disable('etag');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public/')));

app.use('/', function(req, res){
  var context = appComponent.createContext({
    req: req
  });

  console.log('app.use req:',req.url)
  var actionContext = context.getActionContext();

  actionContext.executeAction(serverActionCreators, res, {}, function(err, result){
    console.log('pre-err if statement')
    if(err){
      console.log('err: '+err)
      return next();
    }
    console.log('post-err if statement')

    var exposed = 'window.App=' + serialize(appComponent.dehydrate(context)) + ';';
  });
});

var server = http.createServer(app).listen(port, function() {
  var addr = server.address();
  log.info('App starting on : '+addr.address + ' Listening on port :' + addr.port);
});
