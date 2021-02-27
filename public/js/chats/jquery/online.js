/**
 * JQuery для получения онлайна
 */
$(document).ready(function(){
    online = $('.online');
  
  
    function to_html(data) {

        var html = `      
        Онлайн: ${123}<br><br>`
    
        online.html(html);
    }
  
    /**
    var socket = io();
  
  
    socket.emit('chats_get_online');
    socket.once('chats_online', function(data) {
      to_html(data)
    })
*/
  
  })