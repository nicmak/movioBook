import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { firstAction } from './actions/appActions'
import { Grid, Row, Col, Button } from 'react-bootstrap';

// -----Components-----------------
import Description from './components/Description'
import Poster from './components/Poster'


const mapDispatchToProps = (dispatch) => {
  return {
    firstDispatch: (text,test) => {
      dispatch(firstAction(text,test))
    }
  }
}

class App extends Component {

  componentDidMount () {
    this.props.firstDispatch('HelloWorld', true)
  }
  render() {
    return (
    <Grid fluid={false}>
      <Row className="Search">
        
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
