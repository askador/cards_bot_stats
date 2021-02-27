const express = require('express');
const app = express();
const http = require('http')
const server = http.Server(app);
const io = require('socket.io')(server);
const mysql = require('mysql');
const port = process.env.PORT || 8080

const delay = 10000*60*1000 
const online_delay = 1000000*1*1000
const stats_id_range = {
  // в часах
  0: "8760",      // год
  1: "4380",      // полгода 
  2: "720",       // месяц
  3: "168",       // неделя
  4: "24",        // сутки
}

// db = mysql.createConnection({
//     host: "localhost",
//     port: '3306',
//     user: 'root',
//     password: 'password',
//     database: 'cards_bot_db'
//   });

// db.connect(function (err) {
//   if (err) console.log(err);
// });


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/html/home.html');
});
app.get('/users.html', function(req, res){
  res.sendFile(__dirname + '/public/html/users.html');
});
app.get('/chats.html', function(req, res){
  res.sendFile(__dirname + '/public/html/chats.html');
});
app.get('/games.html', function(req, res){
  res.sendFile(__dirname + '/public/html/games.html');
});
app.get('/more.html', function(req, res){
  res.sendFile(__dirname + '/public/html/more.html');
});



/**  show interval  */
/** home page */
var home_slider_change_interval = null
var home_activity_interval = null
var home_get_general_interval = null
var home_online_interval = null
var home_period_data_interval = null

/** chats page */
var chats_slider_change_interval = null
var chats_activity_interval = null
var chats_online_interval = null
var chats_period_data_interval = null

/** games page */
var games_general_slider_change_interval = null
var games_general_activity_interval = null
var games_general_online_interval = null
var games_general_period_data_interval = null

var games_durak_activity_interval = null
var games_durak_online_interval = null
var games_durak_period_data_interval = null
var games_durak_slider_change_interval = null

var games_debertz_activity_interval = null
var games_debertz_online_interval = null
var games_debertz_period_data_interval = null
var games_debertz_slider_change_interval = null



io.sockets.on('connection', function (socket) {
  
  /** ------------------------------  H O M E -- P A G E  ------------------------------- */
  var home_get_activity = require('./socket_functions/home/get_activity')
  var home_get_general = require('./socket_functions/home/get_general')
  var home_get_online = require('./socket_functions/home/get_online')
  var home_get_period_data = require('./socket_functions/home/get_period_data')
  var home_slider_change = require('./socket_functions/home/slider_change')
  
  socket.on('home_get_activity', function () {
    clearInterval(home_activity_interval);
    home_activity_interval = setInterval(function(){
      home_get_activity(socket)
    }, delay)
    
  })
  
  socket.on('home_get_general', function () {
    clearInterval(home_get_general_interval)
    home_get_general_interval = setInterval(function(){        
      home_get_general(socket)
    }, delay);
  })

  socket.on('home_get_online', function () {
    clearInterval(home_online_interval);
    home_online_interval = setInterval(function(){        
      home_get_online(socket)  
    }, online_delay);

  })

  socket.on('home_get_period_data', function (slider_val) {
    clearInterval(home_period_data_interval)
    home_period_data_interval = setInterval(function(){        
      home_get_period_data(socket, stats_id_range[slider_val])
    }, delay);
      
  })

  socket.on('home_slider_change', function(slider_val) {   
    clearInterval(home_slider_change_interval);     
    home_slider_change_interval = setInterval(function(){   
      home_slider_change(socket, stats_id_range[slider_val])
    }, delay)
    
  })

  /** ------------------------------------------------------------------------------------- */


  /** ------------------------------  C H A T S -- P A G E  ------------------------------- */
  var chats_activity = require('./socket_functions/chats/get_activity')
  var chats_online = require('./socket_functions/chats/get_online')  
  var chats_get_period_data = require('./socket_functions/chats/get_period_data')
  var chats_slider_change = require('./socket_functions/chats/slider_change')  

  socket.on('chats_get_activity', function (slider_val) {
    clearInterval(chats_activity_interval)
    chats_activity_interval = setInterval(function(){
      chats_activity(socket, stats_id_range[slider_val])
    }, delay)
  })

  socket.on('chats_get_online', function () {
    clearInterval(chats_online_interval)
    chats_online_interval = setInterval(function(){
      chats_online(socket)
    }, online_delay)
  })
  
  socket.on('chats_get_period_data', function (slider_val) {
    clearInterval(chats_period_data_interval)
    chats_period_data_interval = setInterval(function(){   
      chats_get_period_data(socket, stats_id_range[slider_val])
    }, delay)
   
  })

  socket.on('chats_slider_change', function (slider_val) {
  clearInterval(chats_slider_change_interval)
  chats_slider_change_interval = setInterval(function(){   
    chats_slider_change(socket, stats_id_range[slider_val])
  }, delay)
  })


  /** ------------------------------------------------------------------------------------- */


  /** ------------------------------  G A M E S -- P A G E  ------------------------------- */
  /* GENERAL STATS */
  var games_general_activity = require('./socket_functions/games/general/get_activity')
  var games_general_online = require('./socket_functions/games/general/get_online')
  var games_general_period_data = require('./socket_functions/games/general/get_period_data')
  var games_general_slider_change = require('./socket_functions/games/general/slider_change')  

  socket.on('games_general_activity', function(){
    clearInterval(games_general_activity_interval)
    games_general_activity_interval = setInterval(function(){
      games_general_activity(socket)
    }, delay)
  })

  socket.on('games_general_online', function(){
    clearInterval(games_general_online_interval)
    games_general_online_interval = setInterval(function(){
      games_general_online(socket)
    }, online_delay)
  })

  socket.on('games_general_period_data', function(){
    clearInterval(games_general_period_data_interval)
    games_general_period_data_interval = setInterval(function(){
      games_general_period_data(socket)
    }, delay)
  })

  socket.on('games_general_slider_change', function(){
    clearInterval(games_general_slider_change_interval)
    games_general_slider_change_interval = setInterval(function(){
      games_general_slider_change(socket)
    }, delay)
  })

  /* DURAK STATS */
  var games_durak_activity = require('./socket_functions/games/durak/get_activity')
  var games_durak_online = require('./socket_functions/games/durak/get_activity')
  var games_durak_period_data = require('./socket_functions/games/durak/get_period_data')
  var games_durak_slider_change = require('./socket_functions/games/durak/slider_change')  

  socket.on('games_durak_activity', function(){
    clearInterval(games_durak_activity_interval)
    games_durak_activity_interval = setInterval(function(){
      games_durak_activity(socket)
    }, delay)
  })

  socket.on('games_durak_online', function(){
    clearInterval(games_durak_online_interval)
    games_durak_online_interval = setInterval(function(){
      games_durak_online(socket)
    }, online_delay)
  })

  socket.on('games_durak_period_data', function(){
    clearInterval(games_durak_period_data_interval)
    games_durak_period_data_interval = setInterval(function(){
      games_durak_period_data(socket)
    }, delay)
  })

  socket.on('games_durak_slider_change', function(){
    clearInterval(games_durak_slider_change_interval)
    games_durak_slider_change_interval = setInterval(function(){
      games_durak_slider_change(socket)
    }, delay)
  })

  /* DEBERTZ STATS */
  var games_debertz_activity = require('./socket_functions/games/debertz/get_activity')
  var games_debertz_online = require('./socket_functions/games/debertz/get_activity')
  var games_debertz_period_data = require('./socket_functions/games/debertz/get_period_data')
  var games_debertz_slider_change = require('./socket_functions/games/debertz/slider_change')  

  socket.on('games_debertz_activity', function(){
    clearInterval(games_debertz_activity_interval)
    games_debertz_activity_interval = setInterval(function(){
      games_debertz_activity(socket)
    }, delay)
  })

  socket.on('games_debertz_online', function(){
    clearInterval(games_debertz_online_interval)
    games_debertz_online_interval = setInterval(function(){
      games_debertz_online(socket)
    }, online_delay)
  })

  socket.on('games_debertz_period_data', function(){
    clearInterval(games_debertz_period_data_interval)
    games_debertz_period_data_interval = setInterval(function(){
      games_debertz_period_data(socket)
    }, delay)
  })

  socket.on('games_debertz_slider_change', function(){
    clearInterval(games_debertz_slider_change_interval)
    games_debertz_slider_change_interval = setInterval(function(){
      games_debertz_slider_change(socket)
    }, delay)
  })


  /** ------------------------------------------------------------------------------------- */


})


server.listen(port, function(){
  console.log('Server started')
});