import React from 'react';
import './RiskList.css';
import ListGroup from 'react-bootstrap/ListGroup'
import RiskDetail from '../RiskDetail/RiskDetail';

class RiskList extends React.Component {
    render () {
        const riskList = this.props.riskList.map((risk, index) => {
            return (
                <RiskDetail risk={risk} key={index}/>
            )
        });
        return (
          <div>
            <h3 className= "title">Unapproved Devices that Require Attention</h3>
            <hr />
            <ListGroup as="ul">
                {riskList}
            </ListGroup>
          </div>
        )
    }

}
export default RiskList;