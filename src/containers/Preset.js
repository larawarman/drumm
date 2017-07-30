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
      />
    )
  }
}

const PresetArea = styled.div`
  background-color: rgba(17,67,87,0.5);
  margin: 5px 0;
  flex-basis:40px;
  min-width:120px;
  border-radius: 1px;
  &.active {
    background-color: rgba(17,67,87,1);
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
