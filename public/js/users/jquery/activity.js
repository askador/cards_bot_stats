/**
 * JQuery для получения активности
 */
$(document).ready(function(){
  activity = $('.activity');


  function to_html(data) {
    var html = `
    Всего пользователей: ${data[0]['count']}<br><br>
    
    Активность: ${123}%<br>`

    activity.html(html);
  }

  /**
  var socket = io();

  slider = $('input[type=range]')

  socket.emit('users_get_activity', slider.val());
  socket.once('users_activity', function(data) {
    to_html(data)
  })


  slider.on('input', function(e){
      
      socket.emit('users_get_activity', slider.val());
      socket.once('users_activity', function(data) {
        to_html(data)
      })
  })
*/

})