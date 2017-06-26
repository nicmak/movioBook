import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import Wolf from './Style/package.jpeg'

import './Style/Poster.css'

let examplePoster = 'https://www.google.ca/url?sa=i&rct=j&q=&esrc=s&source=imgres&cd=&cad=rja&uact=8&ved=0ahUKEwjYxZv7pdrUAhWk44MKHanQCb8QjRwIBw&url=http%3A%2F%2Ft1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTm52BWbxXmwOpfz5rmx0BNBj79kSQoGpYPq4TVt07Jel5En6aC&psig=AFQjCNGWOqWRCA286i58UEgDNmx5as0yZA&ust=1498524780382583'

class IndexPoster extends Component {
	render() {
		return (
      <Col 
        className='PosterContainer'
        sm={12} 
        md={5}
       >
         <Image className='PosterImg' src={Wolf} responsive/>
      </Col>
		)
	}
}

IndexPoster = connect(null, null)(IndexPoster);

export default IndexPoster;