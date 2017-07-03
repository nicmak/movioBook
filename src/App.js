import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { firstAction } from './actions/appActions';
import { sendMovie, showContent, hideContent } from './actions/movieActions';
import { Grid,Col, Row, ResponsiveEmbed } from 'react-bootstrap';
import request from 'superagent';
// import {APIKEY} from './key';
import _ from 'underscore';

// -----Components-----------------
import Description from './components/Description';
import Poster from './components/Poster';
import Search from './components/Search';

const APIKEY = 'e364114ad70fa46fc8bfc7ec86b1326c';

const mapDispatchToProps = (dispatch) => {
  return {
    firstDispatch: (text,test) => {
      dispatch(firstAction(text,test))
    },
    selectMovie : (movieObject) => {
      dispatch(sendMovie(movieObject))
    },
    showTrailer : () => {
      dispatch(showContent())
    },
    hideTrailer : () => {
      dispatch(hideContent())
    }
  }
}

const mapStateToProps = (state) => {
  return {
    movieObject : state.movieReducer.selectedMovie,
    contentAppear : state.movieReducer.contentAppear
  }
}

class App extends Component {
  
  getMovieDetails = (movieID) => {
    const URI = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${APIKEY}&append_to_response=videos`
    return request
      .get(URI)
      .then((res,err) => {
        if (res) {
          console.log('movie Details', JSON.parse(res.text))
          this.props.selectMovie(JSON.parse(res.text))
        }
        else {
          console.log('cannot get movie Details', err)
        }
      })
  }

  queryMovie = (input) => {
    const encodedString = encodeURI(input)
    const URI = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${encodedString}`
    return request
      .get(URI)
      .then((res, err) => {
        if (res) {
          console.log('searchmovies Sucess', JSON.parse(res.text))
          return JSON.parse(res.text)
        } else {
          console.log('searchmovies Fail', err)
        }
      })   
  }

  componentDidMount() {
    this.getMovieDetails(75174)
  }


  render() {
    const { movieObject, contentAppear, showTrailer, hideTrailer } = this.props;
    return (
    <section
      className='outerContainer'
      style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${this.props.movieObject.backdrop_path}`}}
    >
      <div className='shadowContainer'>
      <Row style={contentAppear ?{opacity:'0.5'} :null}>
        <Col
          lg={3}
          lgPush={3}
          md={5}
          sm={6}
          smPush={3}
          xs={6}
          xsPush={3}
        >
          <Search
            queryMovie = { this.queryMovie }
            getMovieDetails = { this.getMovieDetails }
          />
        </Col>
      </Row>
      { 
        !_.isEmpty(movieObject) && contentAppear ?
        <Col 
          className='trailer'
          lg={6}
          lgPush={3}
          md={10}
          mdPush={1}
          sm={10}
          smPush={1}
          xs={12}
          >
            <button className='closeButton' onClick={hideTrailer}>X</button>
            <iframe src={`https://www.youtube.com/embed/${movieObject.videos.results[0].key}?autoplay=1`}></iframe>
        </Col>
        :null
      }
      <Row style={contentAppear ?{opacity:'0.5'} :null} >
        <Col 
          xs={8}
          xsPush={2} 
          sm={6}
          smPush={3}
          md={8}
          mdPull={2}
          lg={6} 
          lgPush={3} 
          className='gridContainer'>
            <Description
              showTrailer = {showTrailer}
            />
            <Poster/>
        </Col>
      </Row>
      <Row>
      </Row>
      </div>
    </section>
    );
  }
}

App = connect(mapStateToProps,mapDispatchToProps)(App);
export default App;
