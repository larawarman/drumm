import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { playStop } from '../actions/index';
import styled from 'styled-components';

class Controls extends Component {
  constructor(props) {
    super();
    this.handlePlay = this.handlePlay.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }
  handlePlay() {
    this.props.playStop(true);
  }
  handleStop() {
    this.props.playStop(false);
  }
  render() {
    return (
      <ControlsContainer>
        {this.props.isPlaying}
        <Play
          onClick={this.handlePlay}
          className={ `${this.props.isPlaying === false ? 'active' : ''}` }
        >
          &#9658;
        </Play>
        <Stop
          onClick={this.handleStop}
          className={ `${this.props.isPlaying === true ? 'active' : ''}` }
        >
          &#9724;
        </Stop>
      </ControlsContainer>
    )
  }
}

const ControlsContainer = styled.div`
  .active {
    display: block;
  }
`;

const Play = styled.div`
  display:none;
`;

const Stop = styled.div`
  display:none;
`;



function mapStateToProps(state) {
  return{
    isPlaying: state.isPlaying
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ playStop }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
