
/**
 * JQuery для общей активности бота
 */
$(document).ready(function(){
    general__stats = $('.general__stats');
    var socket = io()
  
    slider = $('input[type=range]')
  
  
  
    function to_html(data) {
      var html = `
      Активность: ${data}%<br>
      Всего сыграно: ${data}`
      
      general__stats.html(html);
    }
    
  /**
    socket.emit('games_general_get_activity', slider.val());
    socket.once('games_general_activity', function(data) {
      to_html(data)
    })
  
  
    slider.on('input', function(e){
        
        socket.emit('games_general_get_activity');
        socket.once('games_general_activity', function(data) {
          to_html(data)
        })
       
    })
    */
  
  
  })