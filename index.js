var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send("Hello Worlddesseeeeeeeeee");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on porte', app.get('port'));
});
