import React, { Component} from 'react';
import {
	BrowserRouter as Router
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
