import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import _ from 'underscore';

import './Style/Description.css'

// Components
import Stats from './Stats'


const mapStateToProps = (state) => {
  return {
    movieObject : state.movieReducer.selectedMovie
  }
}
class IndexDescription extends Component {

  componentDidUpdate() {
    document.body.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${this.props.movieObject.backdrop_path}`;
  }

	render() {
    const { movieObject, showTrailer } =this.props;
    
    const genres = !_.isEmpty(movieObject) ? movieObject.genres.map((genre, index) => {
      return index !== movieObject.genres.length - 1 ? `${genre.name} | ` : `${genre.name}`
    }) : null

    const productionCompanies = !_.isEmpty(movieObject) ? movieObject.production_companies.map((company, index) => {
      return index !== movieObject.production_companies.length - 1 ? `${company.name} | ` : `${company.name}`
    }) : null
    
		return (
      <Col className='DescriptionContainer'
        xs={12}
        md={8}
        mdPush={4}
        lg={7}
        lgPush={5}
      >
         <div className='HeaderContainer'>
           <h1>{movieObject.title}</h1>
           <button 
             className='TrailerButton'
             onClick={showTrailer}
           >
             Watch Trailer
           </button>
         </div>
         <h3>{movieObject.tagline}</h3>
         <p>{movieObject.overview}</p>
         <h3>{genres}</h3>
         <p>{productionCompanies}</p>
         {
          movieObject ?
            <Stats
              movieObject = {movieObject}
            />
          : null
         }
      </Col>
		)
	}
}

IndexDescription = connect(mapStateToProps, null)(IndexDescription);

export default IndexDescription;