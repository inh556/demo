import React, { Component } from 'react';
import './App.css';
import users from './user.json'
import getUser from './getUsersData';
import RiskList from './componnets/RiskLists/RiskList';
import PieChart from './componnets/PieChart/PieChart'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountRisk: null,
      riskList: null,
      isLoading: true
    }
  }
  componentDidMount() {
    const res = getUser(users)
    this.setState({
      accountRisk: res.accoutRisk,
      riskList: res.highRiskList,
      isLoading: false
    }, console.log(this.state.riskList))
  }
 
  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    } 
    return (
      <div className="container" >
        <PieChart accountRisk={this.state.accountRisk}/>
        <RiskList riskList={this.state.riskList}/>
      </div>
    );
  }
}

export default App;