import { data } from "./data.js";
import { options } from "./options.js";

var ctx = document.getElementById('myChart').getContext('2d');
export var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});
