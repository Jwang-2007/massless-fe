(function () {
    angular
        .module('app')
        .controller('MovingAverageController', [
            MovingAverageController
        ]);

    function MovingAverageController() {
        var vm = this;

        // TODO: move data to the service
        vm.memoryChartData = [ {key: 'memory', y: 10}, { key: 'free', y: 90} ];

        vm.chartOptions = {
            chart: {
                type: 'pieChart',
                height: 210,
                donut: true,
                pie: {
                    startAngle: function (d) { return d.startAngle/2 -Math.PI/2 },
                    endAngle: function (d) { return d.endAngle/2 -Math.PI/2 }
                },
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['rgb(0, 150, 136)', 'rgb(191, 191, 191)'],
                showLabels: false,
                showLegend: false,
                tooltips: false,
                title: 'STRONG SELL',
                titleOffset: 30,
                margin: { bottom: -80, left: -20, right: -20 }
            }
        };
    }
})();
