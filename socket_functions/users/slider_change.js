/**
 * Функция для графика статистики чатов за данный период
 * 
 * @param {*} socket 
 * @param {number} range 
 */
module.exports = function slider(socket, range){
         
    function pretty_date(date) {

        var p_date = date.toString().split(' ')[4]
        
        return p_date
    }

    
  /**
   * SELECT date, count FROM users_stats WHERE id >= (SELECT max(id) FROM users_stats) - ${range}
   *        
   *        var date = []
   *        var data = []
   *        var average = 0     
   * 
   *        results.forEach(element => {
   *          date.push(pretty_date(element['date']))
   *          count.push(element['count'])
   *          average += element['count']
   *       })
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
        
//         socket.emit('chats_chart_data', {date, count, average_list})
    
//   })


}