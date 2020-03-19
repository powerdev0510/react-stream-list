import React, { Component} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Contents from './components/content';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Provider store={store}><Contents /></Provider>
        <Footer />
      </div>
    );
  }
}

export default App;
