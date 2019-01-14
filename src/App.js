import React, { Component } from 'react';
import { BrowserRouter as Router , Route }  from 'react-router-dom';
import Marked from 'marked';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Editor from './components/Editor'
import Preview from './components/Preview'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <div className="container">
            <Editor />
            <Preview />
        </div>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
