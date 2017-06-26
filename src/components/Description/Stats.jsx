import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

class Stats extends Component {
	render() {
		return (
      <Row className='StatsContainer'>
        <Col xs={12} lg={6}>
         Original Release<br/>2014-12-24
        </Col>
        <Col xs={12} lg={6}>
         Running Time:<br/>2013-11-21
        </Col>
        <Col xs={12} lg={6}>
         Box Office:<br/> $392,000,000
        </Col>
        <Col xs={12} lg={6}>
         Vote Average:<br/>7.9/10
        </Col>
      </Row>
		)
	}
}
Stats = connect(null, null)(Stats)
export default Stats;