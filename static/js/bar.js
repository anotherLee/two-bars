
var echarts = require('echarts')

function drawBars () {
    var myChart = echarts.init(document.getElementById('two-bars'))
    var option = {
        tooltip:{
        },
        legend: [
            {
                left:'middle',
                data:['收入']
            },
            {
                right:'middle',
                data:['支出']
            }
        ],
        grid: [
            {
                top:50,
                left:'2%',
                width:'45%',
                containLabel:true
            },
            {
                top:50,
                right:'4%',
                width:'45%',
                containLabel:true
            }
        ],
        barWidth:32,
        xAxis: [
            {
                type:'value',
                inverse:true,
                position:'top',
                max:500,
                axisLabel:{
                    formatter: function (value, index) {
                        return Math.abs(value)
                    }
                },
                axisLine:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                splitLine:{
                    show:false
                }
            },
            {
                type:'value',
                position:'top',
                gridIndex:1,
                max:500,
                min:0,
                axisLine:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    formatter: function (value, index) {
                        return Math.abs(value)
                    }
                },
                splitLine:{
                    show:false
                }
            }
        ],
        yAxis: [
            {
                type:'category',
                axisTick:{
                    show:false
                },
                axisLabel:{
                    show:false
                },
                axisLine:{
                    show:false
                },
                data:['周一','周二','周三','周四','周五','周六','周日']
            },
            {   
                type:'category',
                gridIndex:1,
                position:'left',
                axisLine:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    margin:30
                },
                data:['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        series: [
            {
                name:'收入',
                type:'bar',
                barWidth:25,
                // stack:'总量',
                data:[320,302,341,374,390,450,420]
            },
            {
                name:'支出',
                type:'bar',
                // stack:'总量',
                barWidth:25,
                xAxisIndex:1,
                yAxisIndex:1,
                data:[320,332,301,334,390,330,410]
            }
        ]
    }
    myChart.setOption(option,true)
}

export default drawBars