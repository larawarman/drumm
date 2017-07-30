import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateActivePreset } from '../actions/index';
import styled from 'styled-components';


class Preset extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <PresetArea
        key={this.props.id}
        className={ `preset${this.props.id === this.props.activePreset ? ' active' : ''}` }
        onClick={() => this.props.updateActivePreset(this.props.id)}
      >
        {this.props.id + 1}
      </PresetArea>
    )
  }
}

const PresetArea = styled.div`
  width: 60px;
  height: 60px;
  background-color: aqua;
  margin: 20px;
  &.active {
    background-color: yellow;
  }
`;

function mapStateToProps(state) {
  return{
    activePreset: state.activePreset
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateActivePreset }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Preset);
