import React, { Component, Fragment} from 'react';

import { connect } from 'react-redux';

class Movies extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div className="contentHeader">
            <h2>Popular Movies</h2>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
	data: state.stream.data,
});
export default connect(mapStateToProps)(Movies);