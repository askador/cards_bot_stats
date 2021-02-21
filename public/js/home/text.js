$(document).ready(function(){

    text = $('.text');
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
    socket.emit('get_text');
    socket.on('text', function (data) {
        text.html(data);
    });
})