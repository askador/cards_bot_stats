/**
 * 
 * @param {number} current 
 * @param {number} old
 * @return {string} difference
 */
function percent_diff(current, old) {
    var sign = (((current-old) / old)*100) >= 0 ? '+' : '-'
    return sign + String(((Math.abs(current-old) / old)*100).toFixed(2))
 }

/**
 * Функция для подсчета процента разницы активности
 * @param {number[]} data 
 * @return {string} change
 */
function calculate_activity(data) {

    // get loop border
    var len = []
    for (key in data) {
        len.push(data[key].length)
        keys++
    }
    len = Math.min.apply(null, len)

    // get average
    var avg = 0
    for (let i = 0; i < len; i++) {
        var mult = 1
        for (key in data) {
            mult *= data[key][i]
        }

        avg += Math.log(mult)
    }
    avg /= len

    // get last elements log() multiplication
    var mult = 1
    for (key in data) {
        mult *= data[key][data[key].length - 1]
    }


    var change = percent_diff(Math.log(mult), avg)
    
    return change
}

module.exports = calculate_activity