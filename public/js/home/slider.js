
import {myChart} from "/js/home/chart.js"

$('input[type=range]').on('input', function(e){
  var min = e.target.min,
      max = e.target.max,
      val = e.target.value;
  
  $(e.target).css({
  'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
  });

  var socket = io.connect("https://test-stats-site.herokuapp.com/", {       
    reconnectionDelay: 1000,
    reconnection:true,
    reconnectionAttempts: 10,
    transports: ['websocket'],
    agent: false, // [2] Please don't set this to true
    upgrade: false,
    rejectUnauthorized: false 
}
);

  socket.emit('browser_slider', val);
  socket.on('chart_data', function (sample) {
    try {
        myChart.data.labels = (sample['date']);
        myChart.data.datasets[1].data = (sample['count']);

        myChart.data.datasets[0].data = (sample['average_list'])
        myChart.update()
      } 
    catch (error) {}
      
  })

}).trigger('input');

