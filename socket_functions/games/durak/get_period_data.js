/**
 * Функция для получения данных за период
 * Всего
 * Минимум
 * Максимум
 * @param {*} socket 
 * @param {number} range 
 */
module.exports = function get_period_data(socket, range) {
    

    // db.query(`SELECT max(id) FROM test_stats`, function (err, id) { 
    //     db.query(`SELECT count FROM test_stats WHERE id = ${1000 - 2}`, function (err, count) { 
    //     db.query(`SELECT count FROM test_stats WHERE id = ${1000 + 4}`, function (err, count_2) { 

    //         var data = {
    //         'games': id[0]['max(id)'],
    //         'chats': count[0]['count'],
    //         'users': count_2[0]['count'],
    //         }
            
    //         socket.emit('games_durak_period_data', data)
    //     })
    //     })
    // })

}