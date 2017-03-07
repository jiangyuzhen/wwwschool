require.config({
    packages: [{
        name: 'echarts',
        location: './echarts/src',
        main: 'echarts'
    }, {
        name: 'zrender',
        location: './zrender/src',
        main: 'zrender'
    }]
});
function DrawEchart(Dom,titleText,titleSubtext,xCoordinate,yUnit,legendName,sData){
    require(
            [
                'echarts',
                'echarts/chart/pie',
                'echarts/chart/line',
                'echarts/chart/bar'
            ],
            function(ec){
                var myChart = ec.init(document.getElementById(Dom),'macarons');
                //转换对象数据为json
                //JSON.stringify(sData);
                //--- 柱状图 ---
                //var myChart = ec.init(document.getElementById(DrawAreaId));
                //图表显示提示信息
                myChart.showLoading({
                    text: "图表数据正在努力加载..."
                });
                myChart.hideLoading();
                myChart.setOption({
                    title: {
                        text: titleText,
                        subtext: titleSubtext
                    },
                    tooltip: {
                        trigger: 'axis' //item  axis  
                    },
                    legend: {
                        x:'center',
                        y :'bottom',
                        data:legendName
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        data: xCoordinate
                    }],
                    yAxis: [{
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}'+yUnit
                        },
                        
                    }],
                    series: sData
                },true);
            }
    )
}
