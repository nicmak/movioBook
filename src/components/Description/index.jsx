import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import './Style/Description.css'

// Components
import Stats from './Stats'

class IndexDescription extends Component {
	render() {
		return (
      <Col 
        className='DescriptionContainer'
        sm={12} 
        md={7}
       >
         <h1>The Grey</h1>
         <h3> Live or Die on This Day.</h3>
         <p>
         	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
         </p>

         <h3>Survival, Adventure, Action</h3>
         <p>
           Paramount, Pixar, Disney
         </p>
         <Stats/>
      </Col>
		)
	}
}

IndexDescription = connect(null, null)(IndexDescription);

export default IndexDescription;