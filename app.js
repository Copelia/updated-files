var express = require('express');
var app = express();
// app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

// route pages
app.get('/', function (req, res) {
//   res.send('Main page is up and running!');
    // res.render('/index')
});

app.get('/user', function (req, res) {
  res.send('TODO: update this page...');
});

// what port to run server on
app.listen(8080, function () {
  console.log('server started on port 8080');
});