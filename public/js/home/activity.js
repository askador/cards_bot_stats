$(document).ready(function(){
  activity = $('.activity');
  var socket = io()
//   var socket = io.connect("https://test-stats-site.herokuapp.com/", {       
//     reconnectionDelay: 1000,
//     reconnection:true,
//     reconnectionAttempts: 10,
//     transports: ['websocket'],
//     agent: false, // [2] Please don't set this to true
//     upgrade: false,
//     rejectUnauthorized: false 
// }
// );

  slider = $('input[type=range]')

  socket.emit('get_activity', slider.val());
  socket.on('activity', function(data) {
      activity.html(data);
  })


  slider.on('input', function(e){
      
      socket.emit('get_activity', slider.val());
      socket.on('activity', function(data) {
          activity.html(data);
      })
     
  })


})