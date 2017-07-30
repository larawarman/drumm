import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { activateStep } from '../actions/index';
import styled from 'styled-components';

import Playhead from '../components/Playhead';
import StepHits from '../components/StepHits';

class Playground extends Component {
  renderSteps() {
    let playing;
    if(!this.props.loopPos) {
      playing = 0;
    }
    return this.props.steps.map(step => {
      if ( (this.props.loopPos * 8) + 1 === step.step ) {
        playing = step.step;
      }
      return (
        <StepContainer
          key={ `container-${step.step}` }
          className={ `step ${playing === step.step ? 'playing' : ''}` }
          >
          <Playhead
            key={ `playhead-${step.step}` }
            isPlaying={playing}
          />
          <StepHits
            key={ `stephits-${step.step}` }
            className={ `step step-${step.step}` }
            hits={step.hits}
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
    loopPos: state.loopPos
  };
}

// anything returned from here will be available as props on steps
function mapDispatchToProps(dispatch) {
  // whenever activateStep is called, the result of it
  // will be passed to reducers
  return bindActionCreators( { activateStep: activateStep }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Playground);
