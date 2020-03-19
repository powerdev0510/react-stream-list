import React, { Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStream } from '../actions/fetchStream';
import ContentHeader from '../layouts/contentHeader';
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
        <ContentHeader title = "Popular Titles"></ContentHeader>
        <div className="category">
          <div>
            <img src="https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg" />
					  <Link to='/series'>Popular Series</Link>
          </div>
          <div>
          <img src="https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg" />

					  <Link to='/movies'>Popular Movies</Link>
          </div>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => ({
	data: state.stream.data,
});
export default connect(mapStateToProps)(Contents);