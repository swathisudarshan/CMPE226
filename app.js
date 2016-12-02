
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  ,home = require('./routes/home')
  , http = require('http')
  , path = require('path')
  , session = require('client-sessions');

var app = express();

//setting sessions
app.use(session({   
	cookieName: 'session',    
	secret: 'cmpe226',    
	duration: 30 * 60 * 1000,    
	activeDuration: 5 * 60 * 1000,  }));


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//signup, login and frontpage 
app.get('/', routes.index);
app.get('/signup', home.signup);
app.get('/login', home.login);

//getting Info Pages
app.get('/getDevInfoPage',home.getDevInfoPage);
app.get('/getLayoutInfoPage',home.getLayoutInfoPage);
app.get('/getMaterialInfoPage',home.getMaterialInfoPage);
app.get('/getDTCInfoPage',home.getDTCInfoPage);
app.get('/logout',home.logout);
app.get('/closeReport',home.closeReport);

app.get('/getAdminDashInfoPage',home.getAdminDashInfoPage);
app.get('/getHighchartsAInfoPage',home.getHighchartsAInfoPage);
app.get('/getHighchartsBInfoPage',home.getHighchartsBInfoPage);

//post APIs
//app.post('/addUser', user.addUser);
app.post('/storeDevInfo',home.storeDevInfo);
app.post('/storeLayoutInfo',home.storeLayoutInfo);
app.post('/storeDtcInfo',home.storeDtcInfo);
app.post('/getReportDetails',home.storeDtcInfo);

app.get('/displayReport',home.displayReport);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
