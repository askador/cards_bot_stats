/**
 * JQuery для получения данных за период
 */

$(document).ready(function(){
    const periods = {
        0: "год",
        1: "6 месяцев",
        2: "30 дней",
        3: "7 дней",
        4: "1 день",
    }

    var period = $('.period');
    var period__data = $('.period__data');

    function to_html(data) {
        // var games = period_data['games']
        // var chats = period_data['chats']
        // var users = period_data['users']

        var html = `
        Новых: ${123}<br>
        Всего: ${123}<br>
        Минимум: ${123}<br>
        Максимум: ${123}`

        period__data.html(html);    
    }

    /**
    var socket = io();

    slider = $('input[type=range]')

    period.html(`За ${periods[slider.val()]}<br>`);

    socket.emit('chats_get_period_data', slider.val())
    socket.once('chats_period_data', function(period_data) {
        to_html(period_data) 
    })

    slider.on('input', function(e){

        period.html(`За ${periods[slider.val()]}<br>`);

        socket.emit('chats_get_period_data', slider.val())
        socket.once('chats_period_data', function(period_data) {
            to_html(period_data) 
        })
    })
*/
})