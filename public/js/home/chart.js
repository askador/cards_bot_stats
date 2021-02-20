import { data } from "./data.js";
import { options } from "./options.js";

const colors = [
    "#033E6B",
    "#AEF100",
    "#7F0055",
    "#1f0ba0",
    "#ffce56",
    "#ff9f40",
    "#bdd928",
    "#8ad928",
    "#f9c628",
    "#3e68d5",
    "#4438fb",
    "#00A170",
    "#EA4335",
    "#FFBB00",
    "#A4C639",
    "#ff0000",
    "#01ff00",
    "#fdff00",
    "#f67e1f",
]

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


function generate_points_colors(amount) {
    var colors_list = []

    for (var index = 0; index < amount; index++) {
        colors_list.push(colors[randomInteger(0, colors.length-1)]);
    }
    return colors_list
}


var ctx = document.getElementById('myChart').getContext('2d');
export var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});

// myChart.data.datasets[0].pointHoverBackgroundColor = myChart.data.datasets[0].pointHoverBorderColor = generate_points_colors(6)
// myChart.update()
