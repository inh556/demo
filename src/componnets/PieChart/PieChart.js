import React from 'react';
import ReactEcharts from 'echarts-for-react';

class PieChart extends React.Component {
  getOption() {
    return {
      title : {
          text: '',
          subtext: '',
          x:'center'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      series : [
          {
              name: 'Source',
              type: 'pie',
              radius : '75%',
              center: ['50%', '60%'],
              data:[
                {value:this.props.accountRisk[0], name:'Safe',
                  itemStyle: {color: 'green'},
                },
                {value:this.props.accountRisk[1], name:'Suspicious',
                itemStyle: {color: '#ff9900'},
                },
                {value:this.props.accountRisk[2], name:'Malicious',
                itemStyle: {color: 'red'},
                },
              ],
              itemStyle: {
                  emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
  };
  
  }
  render() {
    return (
        <ReactEcharts option={this.getOption()} />
    );
  }
}

export default PieChart;