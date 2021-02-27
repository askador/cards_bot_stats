
/**
 * JQuery для общей активности бота
 */
$(document).ready(function(){
  activity = $('.activity');
  var socket = io()

  slider = $('input[type=range]')



  function to_html(data) {
    var html = `
    Активность: ${data}%`
    
    activity.html(html);
  }
  
/**
  socket.emit('home_get_activity', slider.val());
  socket.once('home_activity', function(data) {
    to_html(data)
  })


  slider.on('input', function(e){
      
      socket.emit('home_get_activity');
      socket.once('home_activity', function(data) {
        to_html(data)
      })
     
  })
  */


})