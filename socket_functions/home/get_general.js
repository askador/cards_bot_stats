/**
 * Функция для получения общего количества 
 * Игр
 * Чатов
 * Пользователей
 * @param {*} socket 
 */
module.exports = function get_general(socket) {

    /**
     * Выбрать count(user_id), count(chat_id), (sum(count) from games_stats)
     */

    // db.query("SELECT count(id) FROM test_stats", function (err, results) { 
    //     db.query("SELECT max(id) FROM test_stats", function (er, resu) {

    //         var data = {
    //             'users': results[0]['count(id)'],
    //             'chats': resu[0]['max(id)'],
    //             'games': 5545,
    //         }

    //         socket.emit('home_general', data)
    //     })
    // })

}