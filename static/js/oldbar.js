
var echarts = require('echarts')

function oldBars (data) {
    var myChart = echarts.init(document.getElementById('past'))
    var option = {
        tooltip:{
            formatter:function (params) {
                var result = params.name + '<Br>' + params.seriesName + ': ' + Math.abs(params.value) + '元' 
                return result
            }
        },
        legend: {
            data:data.legend
        },
        grid: {
            left:'3%',
            bottom:'3%',
            containLabel:true
        },
        barWidth:32,
        xAxis: [
            {
                type:'value',
                axisLabel:{
                    formatter: function (value, index) {
                        return Math.abs(value)
                    }
                },
                splitLine:{
                    show:false
                },
                min: -450,
                max: 450,
                interval:100
            }
        ],
        yAxis: [
            {
                type:'category',
                axisTick:{
                    show:false
                },
                data:data.yaxis
            }
        ],
        series: [
            {
                name:'收入',
                type:'bar',
                stack:'总量',
                label: {
                    normal:{        
                    }
                },
                data:data.series_data1
            },
            {
                name:'支出',
                type:'bar',
                stack:'总量',
                label:{
                    normal:{
                    }
                },
                data:data.series_data2
            }
        ]
    }
    myChart.setOption(option,true)
}

export default oldBars