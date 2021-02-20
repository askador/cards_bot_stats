var express = require('express');
var app = express();

var http = require('http')
var server = http.Server(app);

var io = require('socket.io')(server);

var port = process.env.PORT || 8080


var mysql = require('mysql');

 db = mysql.createConnection({
    host: 'eu-cdbr-west-03.cleardb.net',
    port: '3306',
    user: 'b095caf0ea58d7',
    password: '1da10bb7',
    database: 'heroku_e3bb9c24356ef8b'
  });

db.connect(function (err) {
  if (err) console.log(err);
});


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/html/TEST.html');
});

io.sockets.on('connection', function (socket) {
  socket.on('browser_slider', function(val) {        
    console.log("DASTA")
    // socket.emit('chart_data', "get_data(results)")
  });
})

server.listen(port, function(){
  console.log('Server started')
});