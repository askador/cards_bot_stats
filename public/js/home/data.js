const chart_background_color = "rgba(175, 192, 192, 0.6)"
const chart_border_color =  "rgba(255, 191, 0, 1)"


export var data = {
    labels: [],
    datasets: [
    {
        data: [],
        borderColor: "rgba(255, 255, 255, 0.7)",
        fill: false,

        pointBorderColor: 'transparent',
        pointBackgroundColor: 'transparent',

        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 0,

        borderDash: [10, 10],
    },
    {
        // label: '# of Votes',
        data: [],
        backgroundColor: [chart_background_color],
        borderColor: [chart_border_color],
        fill: true,

        pointBorderColor: 'transparent',
        pointBackgroundColor: 'transparent',

        borderWidth: 1,
        pointRadius: 10,
        pointHitRadius: 25,
    },

    ]
}