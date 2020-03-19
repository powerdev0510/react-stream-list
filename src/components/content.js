import React, { Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
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
    return (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/movies' component={Movies}></Route>
        <Route exact path='/series' component={Series}></Route>
      </Switch>
    );
  }
}
const mapStateToProps = state => ({
	data: state.stream.data,
});
export default connect(mapStateToProps)(Contents);