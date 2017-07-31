import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tone from 'tone';
import styled from 'styled-components';

import Bpm from './Bpm';
import Controls from './Controls';
import Playground from './Playground';
import Presets from '../components/Presets';

class App extends Component {
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
      <AppContainer
        className="app"
        bpm = {this.props.bpm}
      >
        <HeaderArea>
          <h1>drumm</h1>
          <h6>a tiny lil&rsquo; 8-step drum machine</h6>
          <a href="https://github.com/larawarman">
            by lw with &lt;3
          </a>
        </HeaderArea>
        <Playarea>
          <Machine>
            <Inputs>
              <Controls />
              <Bpm />
            </Inputs>
            <Playground />
          </Machine>
          <Presets />
        </Playarea>
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 20px;
  border: 10px #776872 solid;
  box-sizing: border-box;
  background: #776872;
  background: -webkit-linear-gradient(to left, #F29492, #114357);
  background: linear-gradient(220deg, #F29492, #114357);
  background-size: 140% 140%;
  -webkit-animation: bg-animate ${props => props.bpm ? (500 / props.bpm) : 6}s ease infinite;
  -moz-animation: bg-animate ${props => props.bpm ? (500 / props.bpm) : 6}s ease infinite;
  animation: bg-animate ${props => props.bpm ? (500 / props.bpm) : 6}s ease infinite;


  @media (max-width: 720px) {
    border: none;
    padding: 5px;
  }
  @-webkit-keyframes bg-animate {
    0%{background-position:82% 0%}
    50%{background-position:19% 100%}
    100%{background-position:82% 0%}
  }
  @-moz-keyframes bg-animate {
      0%{background-position:82% 0%}
      50%{background-position:19% 100%}
      100%{background-position:82% 0%}
  }
  @keyframes bg-animate {
      0%{background-position:82% 0%}
      50%{background-position:19% 100%}
      100%{background-position:82% 0%}
  }
`;

const Playarea = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: flex-end;
  @media (max-width: 960px) {
		flex-flow: column nowrap;
	}
`;

const Inputs = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

const HeaderArea = styled.div`
  flex-basis: 100%;
`;
const Machine = styled.div`
  flex-grow: 1;
  margin-right: 120px;
  @media (max-width: 960px) {
    margin-right: 0;
  }
`;

function mapStateToProps(state) {
  return{
    bpm: state.bpm
  };
}

export default connect(mapStateToProps)(App);
