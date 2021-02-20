$(document).ready(function(){

    text = $('.text');

    var socket = io.connect("https://test-stats-site.herokuapp.com/", { secure: true, reconnection: true, rejectUnauthorized: false });
    socket.emit('get_text');
    socket.on('text', function (data) {
        text.html(data);
    });
})