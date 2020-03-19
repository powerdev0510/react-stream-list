import React, { Component, Fragment} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';
import Contents from './components/content';
import './App.css';

import Header from './layouts/header';
import Footer from './layouts/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Contents />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
