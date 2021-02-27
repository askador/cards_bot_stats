var calculate_activity = require('../calculate_activity')

/**
 * Функция для передачи активности бота в процентном виде
 * @param {*} socket 
 */
module.exports = function get_activity(socket) {

    /**
     * Достаем time и count за последний месяц из users, chats, games
     * для каждого time устанавливаем log( users(count) * chats(count) * games(count) )
     * ищем среднее значение и находим разницу в процентном виде
     * 
     * data = {
     *  users: results['users'],
     *  chats: results['chats'],
     *  games: results['games'],
     * }
     * 
     * calculate_activity({data})
     * 
     */

    // db.query("SELECT date FROM test_stats", function (err, results) { 
       

    //     socket.emit('home_activity', results.length)
    // })
    
}