import React, { Component, Fragment} from 'react';
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
            <img src="https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg" alt="series"/>
            <span>Popular Series</span>
          </Link>
          <Link to='/movies'>
            <img src="https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg" alt="movies"/>
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