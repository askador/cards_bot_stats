
import {myChart} from "/js/home/chart/chart.js"

/**
 * JQuery для изменения данных на графике
 */

$('input[type=range]').on('input', function(e){
  var min = e.target.min,
      max = e.target.max,
      val = e.target.value;
  
  $(e.target).css({
  'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
  });

  /**
  var socket = io()

  socket.emit('home_slider_change', val);
  socket.once('home_chart_data', function (sample) {
      myChart.data.labels = (sample['date']);
      myChart.data.datasets[1].data = (sample['count']);

      myChart.data.datasets[0].data = (sample['average_list'])
      myChart.update()
      
  })
  */

}).trigger('input');

