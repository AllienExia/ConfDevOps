var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello Worlddesseee");
});

app.listen(4000);
