import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activateStep } from '../actions/index';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import Hit from '../components/Hit';

class Playground extends Component {
  renderSteps() {
    let playing;
    if(!this.props.activeStep) {
      playing = null
    } else {
      playing = this.props.activeStep.step;
    }
    return this.props.steps.map(step => {
      let hits = step.hits;
      return (
        <StepContainer
          key={ `container-${step.step}` }
          className={ `${playing === step.step ? 'playing' : ''}` }
          >
          <Playhead
            key={ `playhead-${step.step}` }
            className="playhead"
          />
          <Step
            key={step.step}
            className={ `step step-${step.step}` }
            onClick={() => this.props.activateStep(step)}
          >
            {this.renderHits(hits)}
          </Step>
        </StepContainer>
      );
    });
  }

  renderHits(hits) {
    return hits.map(hit => {
      return (
        <Hit
          key={hit.id}
          id={hit.id}
          sound={hit.sound}
          activated={hit.activated}
        />
      );
    });
  }

  render() {
    return (
      <Steps>
        {this.renderSteps()}
      </Steps>
    );
  }
}


const Steps = styled.div`
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

const Playhead = styled.div`
  margin: 10px;
  height: 20px;
  background-color: transparent;
`;

const Step = styled.div`
  margin: 10px;
  display: flex;
  flex-flow: column nowrap;
`;


function mapStateToProps(state) {
  // take the app state of steps and map it as props onto steps
  return{
    steps: state.steps,
    activeStep: state.activeStep
  };
}

// anything returned from here will be available as props on steps
function mapDispatchToProps(dispatch) {
  // whenever activateStep is called, the result of it
  // will be passed to reducers
  return bindActionCreators( { activateStep: activateStep }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Playground);
