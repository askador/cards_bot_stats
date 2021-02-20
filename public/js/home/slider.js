import { spawn } from "child_process";
import {myChart} from "/js/home/chart.js"

$('input[type=range]').on('input', function(e){
  var min = e.target.min,
      max = e.target.max,
      val = e.target.value;
  
  $(e.target).css({
  'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
  });

  var socket = io();

  var val = e.target.value
  socket.emit('browser_slider', val);
  socket.on('chart_data', function (sample) {
    console.log(sample)
    // try {
    //     myChart.data.labels = (sample['date']);
    //     myChart.data.datasets[1].data = (sample['count']);

    //     myChart.data.datasets[0].data = (sample['average_list'])
    //     myChart.update()
    //   } 
    // catch (error) {}
      
  })

}).trigger('input');

