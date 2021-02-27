
import {myChart} from "/js/chats/chart/chart.js"


/**
 * JQuery для изменения данных графика
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

  
  socket.emit('chats_slider_change', val);
  socket.once('chats_chart_data', function (sample) {
      myChart.data.labels = [5, 6, 2, 7, 8]//(sample['date']);
      myChart.data.datasets[1].data = [5, 6, 2, 7, 8]//(sample['count']);

      // myChart.data.datasets[0].data = (sample['average_list'])
      myChart.update()
      
  })
  */

}).trigger('input');

