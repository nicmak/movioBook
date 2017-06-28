import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { firstAction } from './actions/appActions';
import { Grid, Row } from 'react-bootstrap';
import request from 'superagent';

// -----Components-----------------
import Description from './components/Description';
import Poster from './components/Poster';
import Search from './components/Search';


const mapDispatchToProps = (dispatch) => {
  return {
    firstDispatch: (text,test) => {
      dispatch(firstAction(text,test))
    }
  }
}

class App extends Component {

  // queryMovie = (input) => {
  //   request
  //     .
  // }

  componentDidMount () {
    this.props.firstDispatch('HelloWorld', true)
  }
  render() {
    return (
    <Grid fluid={false}>
      <Row className="Search">
        <Search/>
      </Row>
      <Row className="movieContent">
        <Poster/>
        <Description/>
      </Row>
    </Grid>

    );
  }
}

App = connect(null,mapDispatchToProps)(App);
export default App;
