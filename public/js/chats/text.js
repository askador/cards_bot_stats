$(document).ready(function(){

    text = $('.text');

    var socket = io.connect('http://localhost:8080');
    socket.emit('get_text');
    socket.on('text', function (data) {
        text.html(data);
    });
})