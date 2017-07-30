import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateLoopPos } from '../actions/index';
import Tone from 'tone';
import styled from 'styled-components';

class Controls extends Component {
  constructor(props) {
    super();

    this.state = {isPlaying: false};

    this.handlePlay = this.handlePlay.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }
  handlePlay() {
    Tone.Transport.start('+0.5');
    Tone.Transport.scheduleRepeat(this.updateTime, "4n");
    this.setState({isPlaying: true});
  }
  handleStop() {
    Tone.Transport.stop();
    Tone.Transport.cancel();
    this.setState({isPlaying: false});
  }
  updateTime() {
    this.props.updateLoopPos(Tone.Transport.progress);
  }
  render() {
    Tone.Transport.bpm.value = this.props.bpm;
    return (
      <ControlsContainer>
        <Play
          onClick={this.handlePlay}
          className={ `${this.state.isPlaying === false ? 'active' : ''}` }
        >
          <i className="fa fa-play" aria-hidden="true"></i>
        </Play>
        <Stop
          onClick={this.handleStop}
          className={ `${this.state.isPlaying === true ? 'active' : ''}` }
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
    loopPos: state.loopPos,
    bpm: state.bpm
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateLoopPos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
