import React, { Component} from 'react';

import { connect } from 'react-redux';
import ContentHeader from '../layouts/contentHeader';

class Series extends Component {
  
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
          <ContentHeader title="Popular Movie"/>
      </div>
    );
  }
}
const mapStateToProps = state => ({
	data: state.stream.data,
});
export default connect(mapStateToProps)(Series);