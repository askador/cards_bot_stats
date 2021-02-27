var calculate_activity = require('../calculate_activity')

/**
 * Функция для передачи активности чатов в процентном виде
 * @param {*} socket 
 * @param {number} range
 */
module.exports = function get_chats_activity(socket, range) {

    /**
     * 
     * Получаем количество активных чатов за каждый час диапазона slider_value
     * 
     * calculate_activity({results})
     * 
     */

    // db.query(`SELECT count FROM test_stats WHERE id = (SELECT max(id) FROM test_stats)`, function (err, results) {
    //       socket.emit('chats_activity', results)
    // })
    
}