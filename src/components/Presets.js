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
      <div>
        Presets:
        <PresetContainer
          className="presets"
        >
          {this.renderPresets()}
        </PresetContainer>
      </div>
    )
  }
}

const PresetContainer = styled.div`
  display: flex;
`;


function mapStateToProps(state) {
  return{
    steps: state.steps
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ updateBpm }, dispatch);
// }

export default connect(mapStateToProps)(Presets);
