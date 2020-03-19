import React, { Component, Fragment} from 'react';
import placeholder from '../assets/placeholder.png';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div className="contentHeader">
            <h2>Popular Titles</h2>
        </div>
        <div className="category">
          <Link to='/series'>
            <div className="categoryImg">
              <img src={placeholder} alt="series"/>
              <div className="overwrite">SERIES</div>
            </div>
            <span>Popular Series</span>
          </Link>
          <Link to='/movies'>
            <div className="categoryImg">
              <img src={placeholder} alt="series"/>
              <div className="overwrite">MOVIES</div>
            </div>
            <span>Popular Movies</span>
          </Link>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
	data: state.stream.data,
});
export default connect(mapStateToProps)(Home);