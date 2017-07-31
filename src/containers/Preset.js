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
  cursor: pointer;
  transition: background-color 0.3s;
  &.active {
    background-color: rgba(17,67,87,1);
    cursor: default;
  }
  &:hover {
    background-color: rgba(17,67,87,1);
    transition: background-color 0.3s;
  }
  @media (max-width: 960px) {
    margin: 0 5px;
    min-width: 40px;
    flex-basis: 120px;
    height: 120px;
  }
  @media (max-width: 720px) {
    min-width: 30px;
    flex-basis: 60px;
    height: 60px;
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
