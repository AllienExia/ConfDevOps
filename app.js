var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello Worldd");
});

app.listen(4000);
