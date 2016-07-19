var express = require("express");
var api = require("./app/api/api.js");
var route = require("./app/routes/index.js");

var app = express();
var path = require('path');

app.set('env', 'production');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

route(app);
api(app);

app.listen(process.env.PORT || 8080, function () {
    console.log('App is listening');
});