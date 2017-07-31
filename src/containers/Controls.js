import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateLoopPos, updateIsPlaying } from '../actions/index';
import Tone from 'tone';
import styled from 'styled-components';

class Controls extends Component {
  constructor(props) {
    super();

    this.handlePlay = this.handlePlay.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }
  handlePlay() {
    Tone.Transport.start('+0.5');
    Tone.Transport.scheduleRepeat(this.updateTime, "4n");
    this.props.updateIsPlaying(true);
  }
  handleStop() {
    Tone.Transport.stop();
    Tone.Transport.cancel();
    this.props.updateIsPlaying(false);
  }
  updateTime() {
    this.props.updateLoopPos(Tone.Transport.progress);
  }
  render() {
    Tone.Transport.bpm.value = this.props.bpm * 2;
    return (
      <ControlsContainer>
        <Play
          onClick={this.handlePlay}
          className={ `${this.props.isPlaying === false ? 'active' : ''}` }
        >
          <i className="fa fa-play" aria-hidden="true"></i>
        </Play>
        <Stop
          onClick={this.handleStop}
          className={ `${this.props.isPlaying === true ? 'active' : ''}` }
        >
          <i className="fa fa-stop" aria-hidden="true"></i>
        </Stop>
      </ControlsContainer>
    )
  }
}

const ControlsContainer = styled.div`
  font-size: 4em;
  min-height: 56px;
  min-width: 64px;
  margin-right: 150px;
  cursor: pointer;
  transition: color 0.3s;
  .active {
    display: block;
  }
  &:hover {
    color: rgba(255,255,255,1);
    transition: color 0.3s;
  }
  @media (max-width: 720px) {
    margin-right: 60px;
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
    loopPos: state.loopPos,
    bpm: state.bpm,
    isPlaying: state.isPlaying,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateLoopPos, updateIsPlaying }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
