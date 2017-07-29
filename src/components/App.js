import React, { Component } from 'react';
import Bpm from '../containers/Bpm';
import Controls from '../containers/Controls';
import Playground from '../containers/Playground';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>drumm</h1>
        <Controls />
        <Bpm />
        <Playground />
      </div>
    );
  }
}

export default App;
