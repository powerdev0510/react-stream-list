import React, { Component, Fragment} from 'react';
import placeholder from '../assets/placeholder.png';

import {
	Link
} from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    console.log('---Home Render');
    const { isLoading, isFailed } = this.props;
    return (
      <Fragment>
        <div className="contentHeader">
            <h2>Popular Titles</h2>
        </div>
        {isLoading === true &&
          <h3 style={{marginLeft: '100px'}}>Loading...</h3>
        }
        {isFailed === true &&
          <h3 style={{marginLeft: '100px'}}>Failed...</h3>
        }
        {isLoading === false && isFailed === false &&
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
        }
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  data: state.stream.data,
  isLoading: state.stream.isLoading,
  isFailed: state.stream.isFailed,
});
export default connect(mapStateToProps)(Home);