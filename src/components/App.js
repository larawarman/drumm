import React, { Component } from 'react';
import Tone from 'tone';

import Bpm from '../containers/Bpm';
import Controls from '../containers/Controls';
import Playground from '../containers/Playground';

export default class App extends Component {
  constructor(props) {
    super();
  }
  componentWillMount() {
    Tone.Transport.loop = true;
    Tone.Transport.loopStart = 0;
    Tone.Transport.loopEnd = '2m';
  }
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
