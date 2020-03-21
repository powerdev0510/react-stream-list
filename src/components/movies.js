import React, { Component, Fragment} from 'react';
import Card from './card';

class Movies extends Component {
  render() {
    const { data } = this.props
    console.log('---Movies Render');
    const items = data.map((item, index) => {
          return (
            <Card key={index} img={item.images['Poster Art'].url} alt='series' title={item.title} />
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