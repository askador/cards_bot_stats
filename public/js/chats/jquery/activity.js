/**
 * JQuery для получения активности
 */
$(document).ready(function(){
  activity = $('.activity');


  function to_html(data) {
    var html = `
    Всего чатов: ${data[0]['count']}<br><br>
    
    Активность: ${123}%<br>`

    activity.html(html);
  }

  /**
  var socket = io();

  slider = $('input[type=range]')

  socket.emit('chats_get_activity', slider.val());
  socket.once('chats_activity', function(data) {
    to_html(data)
  })


  slider.on('input', function(e){
      
      socket.emit('chats_get_activity', slider.val());
      socket.once('chats_activity', function(data) {
        to_html(data)
      })
  })
*/

})