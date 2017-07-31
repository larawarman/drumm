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
        <div className="presetLabel">
          presets:
        </div>
        <div className = 'thePresets'>
          {this.renderPresets()}
        </div>
      </PresetContainer>
    )
  }
}

const PresetContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-self: flex-end;
  margin-bottom: 10px;
  .presetLabel {
    margin: 0;
  }
  .thePresets {
    display: flex;
    flex-flow: column nowrap;
  }
  @media (max-width: 960px) {
    align-self: center;
    margin-top: 20px;
    .presetLabel {
      margin: 0 0 10px 5px;
    }
    .thePresets {
      flex-flow: row nowrap;
    }
  }
`;


function mapStateToProps(state) {
  return{
    steps: state.steps
  };
}

export default connect(mapStateToProps)(Presets);
