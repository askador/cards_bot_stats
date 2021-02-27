/**
 * Функция для получения активности для графика за определенный период
 * log(users_stats['count'] * chats_stats['count'] * games_stats['count'])
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
   *    SELECT count FROM chats_stats WHERE id >= (SELECT max(id) FROM chats_stats) - ${range}
   *      SELECT count FROM users_stats WHERE id >= (SELECT max(id) FROM games_stats) - ${range}
   *        
   *        var date = []
   *        var data = []
   *        var mult = 1       
   * 
   * 
   *        for (let i = 0; i < users_stats[0].length; i++){
   *            
   *           date.push(pretty_date(games_stats[i]['date']))       
   *           mult *= games_stats[i]['count'] * chats_stats[i]['count'] * users_stats[i]['count']
   *           data.push(Math.log(mult))
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
//     socket.emit('home_chart_data', {date, count, average_list})
    
//   })

}