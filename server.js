var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('files'));

app.use('/', express.static(__dirname + '/app'));

app.listen(80, function () {
  console.log('Example app listening on port 3000!');
});