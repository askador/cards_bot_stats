var express = require('express');
var app = express();

var http = require('http')
var server = http.Server(app);

var io = require('socket.io')(server);

var port = process.env.PORT || 8080


var mysql = require('mysql');

 db = mysql.createConnection({
    host: 'd3y0lbg7abxmbuoi.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    port: '3306',
    user: 'yqa3t1w2cym1vb7y',
    password: 'gn0abqwymob5muon',
    database: 'u5yt2vy6s2k2s1hn'
  });

db.connect(function (err) {
  if (err) console.log(err);
});


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/html/TEST.html');
});

var chart_interval = null
var activity_interval = null

io.sockets.on('connection', function (socket) {
    socket.on('browser_slider', function(val) {   
      clearInterval(chart_interval);     
      if (val == 1) {
        chart_interval = setInterval(function(){        
          db.query("SELECT date, count FROM test_stats WHERE id >= (SELECT max(id) FROM test_stats) - 500", function (err, results) { 

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

    socket.on('get_activity', function (val) {

      function get_average(data) {
        var average = 0
  
        data.forEach(element => {
            average += element['count']
        })
  
        average /= data.length

        return average.toFixed(2)
      }

      clearInterval(activity_interval);
      if (val == 1) {
        activity_interval = setInterval(function(){        
          db.query("SELECT date FROM test_stats", function (err, results) { 
            db.query("SELECT count FROM test_stats", function (err, count) { 

            socket.emit('activity', `Активность: +${results.length}%<br>
                                     Среднее значение: ${get_average(count)}`)
          })})
        }, 1000);

      }  

      else if (val == 2) {
        activity_interval = setInterval(function(){        
          db.query("SELECT max(id) FROM test_stats", function (err, results) { 
            db.query("SELECT count FROM test_stats WHERE id >= (SELECT max(id) FROM test_stats) - 100", function (err, count) { 
              socket.emit('activity', `Активность: +${results[0]['max(id)']}%<br>
                                      Среднее значение: ${get_average(count)}`)
          })})
        }, 1000);

      }  
      else if (val == 3) {
        activity_interval = setInterval(function(){        
          db.query("SELECT max(id) FROM test_stats", function (err, results) { 
            db.query("SELECT count FROM test_stats WHERE id >= (SELECT max(id) FROM test_stats) - 10", function (err, count) { 
              socket.emit('activity', `Активность: +${results[0]['max(id)']}%<br>
                                      Среднее значение: ${get_average(count)}`)
          })})
        }, 1000);

      }  
    })


    socket.on('get_text', function () {
      setInterval(function(){        
        db.query("SELECT count(id) FROM test_stats", function (err, results) { 
          db.query("SELECT max(id) FROM test_stats", function (er, resu) {
              socket.emit('text', `Пользователей: ${results[0]['count(id)']}<br> 
                                   Чатов: ${resu[0]['max(id)']}<br>
                                   Игр: ${5545} <br>`)
          })
          
        })}, 1000);
    })

})


server.listen(port, function(){
  console.log('Server started')
});