import React, { Component} from 'react';
import {
	Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStream } from '../actions/fetchStream';

import Movies from './movies'
import Series from './series'
import Home from './home'

class Contents extends Component {
  UNSAFE_componentWillMount = () => {
    this.props.dispatch(fetchStream());
	}
  render() {
    console.log('---Contents Render');
    return (
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/movies' >
          <Movies data = { this.props.data.filter(e => e.programType === 'movie' && e.releaseYear >= 2010)} />
        </Route>
        <Route path='/series'>
          <Series data  = { this.props.data.filter(e => e.programType === 'series' && e.releaseYear >= 2010)}/>
        </Route>
      </Switch>
    );
  }
}
const mapStateToProps = state => ({
	data: state.stream.data,
});
export default connect(mapStateToProps)(Contents);