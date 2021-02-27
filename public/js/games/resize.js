import {general_chart} from "/js/games/general/chart/chart.js"
import {durak_chart} from "/js/games/durak/chart/chart.js"
import {debertz_chart} from "/js/games/debertz/chart/chart.js"

var charts = [general_chart, durak_chart, debertz_chart]

/**
 * JQuery для ресайза текста графика
 */
function set_font_size(width){
    let size = 16

    if (825 < width) {
        if (1490 < width){size = 16}
        else {size = 14}
    }

    else if (width <= 825) {
        if (600 < width) {size = 12}
        else{size = 10}
    }

    charts.forEach(chart => {
        chart.options.scales.xAxes[0].ticks.fontSize = size
        chart.options.scales.yAxes[0].ticks.fontSize = size
        chart.update()
    });


}

$(window).width(function (index, width) {
    set_font_size(width)
})

$(window).resize(function(index) {
    set_font_size(index.target.innerWidth)
})