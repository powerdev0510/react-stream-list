import React, { Component} from 'react';

import { connect } from 'react-redux';
import ContentHeader from '../layouts/contentHeader';

class Movies extends Component {
  
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
          <ContentHeader title="Popular Series"/>
      </div>
    );
  }
}
const mapStateToProps = state => ({
	data: state.stream.data,
});
export default connect(mapStateToProps)(Movies);