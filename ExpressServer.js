var express = require("express");
var host = "127.0.0.1";
var port = 1337;

var stringHelper = require("./stringHelper.js");
var nodeSum = require("./nodeSum.js");
var app = express();

app.get("/", function(request, response) {
   response.send("Hello World!");
});

app.get("/hello/:thetext", function(request, response) {
   response.send("Hello "+stringHelper.upperCase(request.params.thetext)+"!");
});

app.get("/sum/:param1/:param2", function(request, response) {
   response.send("sum "+nodeSum.sum(request.params.param1,request.params.param2 ));
});

app.listen(port, host);
console.log('Express listening on host='+host+":"+port);








