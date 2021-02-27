export var options = {
    title: {
        display: false,
        fontColor: 'transparent',
    },

    legend: {
        display: false,
        labels: {                
            fontColor: "white",
        },
        position: 'top',
        align: 'start',
        padding: 20,
    },

    responsive: true,

    tooltips: {

        position: "nearest",
        mode: 'nearest',
        intersect: false,
        enabled: true,
        titleFontSize: 15,
        titleFontStyle: 'normal',
        titleMarginBottom: 10,
        multiKeyBackground: 'transparent',
        displayColors: false,
        filter: function (tooltipItem) {
            return tooltipItem.datasetIndex == 1;
        },
    },

    hover: {
        mode: 'nearest',
        intersect: true,
        animationDuration: 0,
    },  

    scales: {
        xAxes: [{
 
            ticks: {
                fontSize: 16,
                fontColor: 'white',
                padding: 12,
                maxRotation: 0,
                autoSkip: true,
                maxTicksLimit:4,
            },

            gridLines: {
                display: false ,
                color: "rgba(255, 255, 255, 0.7)",
                zeroLineColor: "#FFFFFF",
                offsetGridLines: false,
                drawOnChartArea: false,
            },

        }],
    
        yAxes: [{
            ticks: {
                fontSize: 16,
                beginAtZero: true,
                fontColor: 'white',
                padding: 10, 
                autoSkip: true,
                maxTicksLimit:10,
            },

            gridLines: {
                display: true ,
                color: "rgba(255, 255, 255, 0.7)",
                zeroLineColor: "#FFFFFF"
            },
        }]
    },

    animation: {
        duration: 100
    },
    
    responsiveAnimationDuration: 0,

}