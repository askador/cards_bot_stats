import {myChart} from "/js/chats/chart/chart.js"


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

    myChart.options.scales.xAxes[0].ticks.fontSize = size
    myChart.options.scales.yAxes[0].ticks.fontSize = size
    myChart.update()

}

$(window).width(function (index, width) {
    set_font_size(width)
})

$(window).resize(function(index) {
    set_font_size(index.target.innerWidth)
})