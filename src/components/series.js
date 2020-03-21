import React, { Component, Fragment} from 'react';

class Series extends Component {
  render() {
    console.log('---Series Render');
    const { data } = this.props;
    const items = data.map((item, index) => {
          return (
            <div className='item' key={index}>
              <img src={item.images['Poster Art'].url} alt="movie" />
              <span>{item.title}</span>
            </div>
          );
      }
    );
    return (
      <Fragment>
        <div className="contentHeader">
            <h2>Popular Series</h2>
        </div>
        <div className="itemContainer">
          {items}
        </div>
      </Fragment>
    );
  }
}

export default Series;