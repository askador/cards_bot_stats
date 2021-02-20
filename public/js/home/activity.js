$(document).ready(function(){
  activity = $('.activity');

  var socket = io.connect("https://test-stats-site.herokuapp.com/", { secure: true, reconnection: true, rejectUnauthorized: false });

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