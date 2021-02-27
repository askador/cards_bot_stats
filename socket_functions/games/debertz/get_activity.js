var calculate_activity = require('../../calculate_activity')


/**
 * Функция для передачи активности игр в процентном виде и количества игр
 * @param {*} socket 
 */
module.exports = function get_activity(socket) {

    /**
     * Достаем time и count за последний месяц из games
     * для каждого time устанавливаем log( games(count) )
     * ищем среднее значение и находим разницу в процентном виде
     *   
     * calculate_activity({results['games']})
     * 
     * Достаем количество игр за все время
     * 
     */

    // db.query("SELECT date FROM test_stats", function (err, results) { 
       

    //     socket.emit('games_debertz_activity', results.length)
    // })
    
}