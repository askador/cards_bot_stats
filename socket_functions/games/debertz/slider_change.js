/**
 * Функция для получения активности игр для графика за определенный период
 * log(games_stats['count'])
 * @param {*} socket 
 * @param {number} range 
 */
module.exports = function slider(socket, range){
         
    function pretty_date(date) {

        var p_date = date.toString().split(' ')[4]
        
        return p_date
    }
      

  /**
   * SELECT date, count FROM games_stats WHERE id >= (SELECT max(id) FROM games_stats) - ${range}
   *        
   *        var date = []
   *        var data = []   
   * 
   * 
   *        for (let i = 0; i < users_stats[0].length; i++){
   *            
   *           date.push(pretty_date(games_stats[i]['date']))       
   *           data.push(Math.log(games_stats[i]['count']))
   * 
   *        }
   *        
   */

//     db.query(`SELECT date, count FROM test_stats WHERE id >= (SELECT max(id) FROM test_stats) - ${range}`, function (err, results) { 

//         var date = []
//         var count = []
//         var average = 0
//         var average_list = []

//         results.forEach(element => {
//             date.push(pretty_date(element['date']))
//             count.push(element['count'])
//             average += element['count']
//         })

//         average /= date.length

//         for (let index = 0; index < date.length; index++) {
//             average_list.push(average)
        
//         }
//     socket.emit('games_debertz_chart_data', {date, count, average_list})

//   })

}