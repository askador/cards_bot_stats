var express = require('express');
var app = express();

var http = require('http')
var server = http.Server(app);

var io = require('socket.io')(server);

var port = process.env.PORT || 8080

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/html/TEST.html');
});

server.listen(port, function(){
  console.log('Server started')
});