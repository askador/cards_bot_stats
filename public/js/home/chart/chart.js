import { data } from "/js/home/chart/data.js";
import { options } from "/js/home/chart/options.js";

var ctx = document.getElementById('myChart').getContext('2d');
export var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});
