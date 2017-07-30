import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Playhead from '../components/Playhead';
import StepHits from '../components/StepHits';

class Playground extends Component {
  renderSteps() {
    let playing;
    return this.props.steps[this.props.activePreset].map(step => {
      if ( (this.props.loopPos * 8 ) === step.step ) {
        playing = 'nowPlaying';
      } else {
        playing = false;
      }
      return (
        <StepContainer
          key={ `container-${step.step}` }
          className={ `step ${playing === 'nowPlaying' ? 'playing' : ''}` }
          >
          <Playhead
            key={ `playhead-${step.step}` }
            isPlaying={playing}
          />
          <StepHits
            key={ `stephits-${step.step}` }
            className={ `step step-${step.step}` }
            hits={step.hits}
            isPlaying={playing}
          />
        </StepContainer>
      );
    });
  }

  render() {
    return (
      <PlaygoundContainer
        className="playground"
      >
        {this.renderSteps()}
      </PlaygoundContainer>
    );
  }
}


const PlaygoundContainer = styled.div`
	display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const StepContainer = styled.div`
	display: flex;
  flex-flow: column nowrap;
  opacity: 0.5;
  &.playing .playhead {
    background-color: lime;
  }
  &.playing {
    opacity: 1.0;
  }
`;


function mapStateToProps(state) {
  // take the app state of steps and map it as props onto steps
  return{
    steps: state.steps,
    activeStep: state.activeStep,
    loopPos: state.loopPos,
    activePreset: state.activePreset
  };
}

export default connect(mapStateToProps)(Playground);
