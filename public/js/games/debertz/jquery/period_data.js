
/**
 * JQuery для детальной статистики за период
 */
$(document).ready(function(){
    const periods = {
        0: "год",
        1: "6 месяцев",
        2: "30 дней",
        3: "7 дней",
        4: "1 день",
    }

    var general__period = $('.general__period');
    var general__period__data = $('.general__period__data')

    function to_html(data) {
        var games = data['games']
        var chats = data['chats']
        var users = data['users']

        var html = `
        Игр: ${games}<br>
        Чатов: ${chats}<br>
        Пользователей: ${users}<br>`
        general__period__data.html(html);    
    }

    /**
    var socket = io()
  
    
    slider = $('input[type=range]')
    general__period.html(`За ${periods[slider.val()]}`);

    socket.emit('games_general_get_period_data', slider.val())
    socket.once('games_general_period_data', function(period_data) {
        to_html(period_data)
        
    })
  
    slider.on('input', function(e){

        period.html(`За ${periods[slider.val()]}`);

        socket.emit('games_general_get_period_data', slider.val());
        socket.once('games_general_period_data', function(period_data) {
            to_html(period_data)
        })
       
    })
    */
  
  
  })