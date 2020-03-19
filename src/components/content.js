import React, { Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStream } from '../actions/fetchStream';

class Contents extends Component {
  UNSAFE_componentWillMount = () => {
    this.props.dispatch(fetchStream());
	}
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Router>
        <header>
          123123123
        </header>
        {/* <Switch>
					<Route path='/series'>
						<Series />
					</Route>
					<Route path='/movies' />
            <Movies />
          </Route>
				</Switch> */}
      </Router>
    );
  }
}
const mapStateToProps = state => ({
	data: state.stream.data,
});
export default connect(mapStateToProps)(Contents);