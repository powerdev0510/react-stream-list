import React, { Component, Fragment} from 'react';

import { connect } from 'react-redux';
import { getItems } from '../actions';

class Movies extends Component {
  UNSAFE_componentWillMount = () => {
    // this.props.dispatch(getItems());
    this.props.getMovies('movie');
  }
  render() {
    const { data } = this.props;
  //   const items = data.map((item, index) => {
  //     return (
  //       <tr key={item.id}>
  //         <td><Link to={`/machine/${item.id}`}>{item.name}</Link></td>
  //         <td>{item.ip_address}</td>
  //         <td>
  //           <progress max="100" value={item.health}></progress>
  //         </td>
  //       </tr>
  //     );
  //   }
  // );
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

const mapDispatchToProps = dispatch => ({
  getMovies: (itemType) => dispatch(getItems(itemType))
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);