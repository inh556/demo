import React, { Component } from 'react';
import './App.css';
import users from './user.json'
import ReactEcharts from 'echarts-for-react';
import getUser from './userData';
import RiskList from './componnets/RiskLists/RiskList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notSafeuser: null,
      riskList: null,
      isLoading: true
    }
  }
  componentDidMount() {
    const res = getUser(users)
    this.setState({
      notSafeuser: res.mySet,
      riskList: res.highRiskList,
      isLoading: false
    })
  }
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
                {value:this.state.notSafeuser[0], name:'Safe',
                  itemStyle: {color: 'green'},
                },
                {value:this.state.notSafeuser[1], name:'Suspicious',
                itemStyle: {color: '#ff9900'},
                },
                {value:this.state.notSafeuser[2], name:'Malicious',
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
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    } 
    return (
      <div className="container" >
        {/* <Map /> */}
        <ReactEcharts option={this.getOption()} />
        <RiskList riskList={this.state.riskList}/>
      </div>
    );
  }
}

export default App;