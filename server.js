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

var chart_interval = null

io.sockets.on('connection', function (socket) {
    socket.on('browser_slider', function(val) {   
      clearInterval(chart_interval);     
      if (val == 1) {
        chart_interval = setInterval(function(){        
          db.query("SELECT date, count FROM test_stats WHERE id >= (SELECT max(id) FROM test_stats) - 20", function (err, results) { 

              var date = []
              var count = []
              var average = 0
              var average_list = []

              results.forEach(element => {
                  date.push(element['date'].toString().split(' ')[4])
                  count.push(element['count'])
                  average += element['count']
                })

              average /= date.length

              for (let index = 0; index < date.length; index++) {
                  average_list.push(average)
                
              }
            socket.emit('chart_data', {date, count, average_list})
          
        })}, 1000);
      }
      else if (val == 2) {
        chart_interval = setInterval(function(){        
          db.query("SELECT date, count FROM test_stats WHERE id >= (SELECT max(id) FROM test_stats) - 100", function (err, results) { 

            var date = []
              var count = []
              var average = 0
              var average_list = []

              results.forEach(element => {
                  date.push(element['date'].toString().split(' ')[4])
                  count.push(element['count'])
                  average += element['count']
                })

              average /= date.length

              for (let index = 0; index < date.length; index++) {
                  average_list.push(average)
                
              }
            socket.emit('chart_data', {date, count, average_list})
              
            })}, 1000);
          
      }
      else if (val == 3) {
        chart_interval = setInterval(function(){        
          db.query("SELECT date, count FROM test_stats  WHERE id >= (SELECT max(id) FROM test_stats) - 10", function (err, results) { 

            var date = []
              var count = []
              var average = 0
              var average_list = []

              results.forEach(element => {
                  date.push(element['date'].toString().split(' ')[4])
                  count.push(element['count'])
                  average += element['count']
                })

              average /= date.length

              for (let index = 0; index < date.length; index++) {
                  average_list.push(average)
                
              }
            socket.emit('chart_data', {date, count, average_list})
              
            })}, 1000);
          
    }
    })
})


server.listen(port, function(){
  console.log('Server started')
});