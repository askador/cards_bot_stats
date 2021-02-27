
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

    var period = $('.details__text__period');
    var period__data = $('.details__text__period__data')

    function to_html(data) {
        var games = data['games']
        var chats = data['chats']
        var users = data['users']

        var html = `
        Игр: ${games}<br>
        Чатов: ${chats}<br>
        Пользователей: ${users}<br>`
        period__data.html(html);    
    }

    /**
    var socket = io()
  
    
    slider = $('input[type=range]')
    period.html(`За ${periods[slider.val()]}`);

    socket.emit('home_get_period_data', slider.val())
    socket.once('home_period_data', function(period_data) {
        to_html(period_data)
        
    })
  
    slider.on('input', function(e){

        period.html(`За ${periods[slider.val()]}`);

        socket.emit('home_get_period_data', slider.val());
        socket.once('home_period_data', function(period_data) {
            to_html(period_data)
        })
       
    })
    */
  
  
  })