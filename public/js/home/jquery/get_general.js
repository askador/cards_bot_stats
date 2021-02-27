/**
 * JQuery для общей статистики
 */
$(document).ready(function(){

    general = $('.general');

    /**
    var socket = io()
    // var socket = io.connect("https://test-stats-site.herokuapp.com/", {       
    //     reconnectionDelay: 1000,
    //     reconnection:true,
    //     reconnectionAttempts: 10,
    //     transports: ['websocket'],
    //     agent: false, // [2] Please don't set this to true
    //     upgrade: false,
    //     rejectUnauthorized: false 
    // }
    // );
    socket.emit('home_get_general');
    socket.once('home_general', function (data) {
        var html = `
        Пользователей: ${data['users']}<br> 
        Чатов: ${data['chats']}<br>
        Игр: ${data['games']}<br>`

        general.html(html);
    });
    */
})