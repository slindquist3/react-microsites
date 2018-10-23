import React, { Component } from 'react';
import './App.scss';

const italic = {fontStyle: "italic"};

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>This is a template for <span style={italic}>Furthermore</span> microsites and landing pages.</p>
      </div>
    );
  }
}

export default App;
