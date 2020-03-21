import React, { Component, Fragment} from 'react';

class Movies extends Component {
  render() {
    const { data } = this.props
    console.log('---Movies Render');
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
            <h2>Popular Movies</h2>
        </div>
        <div className="itemContainer">
          {items}
        </div>
      </Fragment>
    );
  }
}

export default Movies;