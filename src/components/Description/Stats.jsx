import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

class Stats extends Component {
	render() {
        const { movieObject } = this.props;
        const revenue = () => { 
          return movieObject.revenue.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'); 
        }
        const formatter = new Intl.NumberFormat('en-US', {
          style:'currency',
          currency:'USD',
          minimumFractionDigits: 0,
        });
        const boxOffice = <span>{formatter.format(movieObject.revenue)|| "--" }</span>
		return (
          <Row className='StatsContainer'>
            <Col xs={6} sm={6} smPush={1} lg={6}>
             <h4>Vote Average:</h4><br/><span>{ movieObject.vote_average || "--" }</span>
            </Col>
            <Col xs={6}  sm={6} smPush={1} lg={6}>
              <h4>Original Release</h4><br/> <span>{ movieObject.release_date || "--" } </span>
            </Col>
            <Col xs={6} sm={6} smPush={1} lg={6}>
              <h4>Running Time:</h4><br/> <span>{ movieObject.runtime || "--" } minutes</span>
            </Col>
            <Col xs={6} sm={6} smPush={1} lg={6}>
             <h4>Box Office</h4><br/>{boxOffice}
            </Col>
          </Row>
	   )
	}
}
Stats = connect(null, null)(Stats)
export default Stats;