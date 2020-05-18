import React, { Component } from 'react';
import echarts from "echarts"
import "./style.less"


export default class Chart extends Component {

    componentDidMount(){
        var myChart = echarts.init(document.getElementById('main'));
        var option = {
            title: {
                text: 'Bar Chart'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

        var myChart = echarts.init(document.getElementById('line'));
        var option1 = {
            title: {
                text: 'Bar Chart'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            }]
        };
        myChart.setOption(option1);

        var myChart = echarts.init(document.getElementById('area'));
        var option2 = {
            title: {
                text: 'Bar Chart'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }]
        };
        myChart.setOption(option2);
        var myChart = echarts.init(document.getElementById('doughnut'));
        var option3 = {
          
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 10,
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 335, name: '直接访问'},
                        {value: 310, name: '邮件营销'},
                        {value: 234, name: '联盟广告'},
                        {value: 135, name: '视频广告'},
                        {value: 1548, name: '搜索引擎'}
                    ]
                }
            ]
        };
        myChart.setOption(option3);
    }
    render() {
        return (
            <div className="Chart">
                <div id="area" style={{width:"600px",height:"400px"}}></div>
                <div id="main" style={{width:"600px",height:"400px"}}></div>
                <div id="line" style={{width:"600px",height:"400px"}}></div>
                <div id="doughnut" style={{width:"600px",height:"400px"}}></div>
            </div>
        );
    }
}

