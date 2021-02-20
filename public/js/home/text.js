$(document).ready(function(){

    text = $('.text');

    var socket = io();
    socket.emit('get_text');
    socket.on('text', function (data) {
        text.html(data);
    });
})