var express = require('express');
var app = express();

// TODO: this is where the base for CSS/JS files is... add variable to be set for deploy ('/public/')
app.use(express.static(process.cwd() + '/src/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.render(process.cwd() + '/src/index');
});

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});
