import { data } from "./data.js";
import { options } from "/js/options.js";

var ctx = document.getElementById('general_chart').getContext('2d');
export var general_chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});
