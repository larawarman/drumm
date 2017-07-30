import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Preset from '../containers/Preset';

class Presets extends Component {
  constructor(props) {
    super();
  }
  renderPresets() {
    return (
      this.props.steps.map((preset, index) => (
          <Preset
            key={index}
            id={index} />
      ))
    )
  }
  render() {
    return (
      <PresetContainer
        className='presets'
      >
        presets:
        {this.renderPresets()}
      </PresetContainer>
    )
  }
}

const PresetContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-self: flex-end;
  margin-bottom: 10px;
`;


function mapStateToProps(state) {
  return{
    steps: state.steps
  };
}

export default connect(mapStateToProps)(Presets);
