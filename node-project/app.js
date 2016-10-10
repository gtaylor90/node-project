var express = require("express");
var app = express();

var port = process.env.PORT; //usually would use a number 

app.get('/', function(req, res){
    res.send('hello world!');
});

app.get('/routing', function(req, res){
    res.send('hello routing!');
});

app.listen(port, function(err){
   console.log('the server is running on port: ' + port); 
});