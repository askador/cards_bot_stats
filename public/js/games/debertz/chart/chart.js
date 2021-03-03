import { data } from "./data.js";
import { options } from "/js/options.js";


var ctx = document.getElementById('debertz_chart').getContext('2d');
export var debertz_chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});
