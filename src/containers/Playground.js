import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Hit from '../components/Hit';

class Playground extends Component {
  renderSteps() {
    return this.props.steps.map(step => {
      let hits = step.hits;
      return (
        <Step
          key={step.step}
          className="step"
        >
          {this.renderHits(hits)}
        </Step>
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

const Step = styled.div`
  margin: 10px;
  display: flex;
  flex-flow: column nowrap;
`;

function mapStateToProps(state) {
  return{
    steps: state.steps
  };
}

export default connect(mapStateToProps)(Playground);
