import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import './RiskDetail.css'

class RiskDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isApproved: false,
      isReported: false
    }
  }
  render() {
    return (
      <ListGroup.Item as="li" style={{display: 'flex',justifyContent: 'space-between',}}>
          <div>
            <p className = "content"><b>{this.props.risk.Shortname}</b></p>
            <p className = "metadata"><b>State:</b> {this.props.risk.State}, <b>Last_seen:</b> {this.props.risk.Last_seen} </p>
          </div>
         <div className="action"><a href='#'>Approve</a><a href='#'>Report</a></div>
      </ListGroup.Item>
    )
  }
}
export default RiskDetail;
