import React, { Component } from 'react';
import Tone from 'tone';
import synth from './App';
import styled from 'styled-components';


export default class Hit extends Component {
  constructor(props) {
    super();
  }

  playSound(sound) {
    const synth = new Tone.MembraneSynth().toMaster();
    if ( sound === 'kick' ){
      synth.triggerAttackRelease('C4', '8n')
    } else if ( sound === 'snare' ) {
      synth.triggerAttackRelease('E4', '8n')
    } else if ( sound === 'openHat' ) {
      synth.triggerAttackRelease('G4', '8n')
    } else if ( sound === 'closedHat' ) {
      synth.triggerAttackRelease('C5', '8n')
    }
  }

  render() {
    if ( this.props.isPlaying && this.props.activated === true ) {
      this.playSound(this.props.sound);
    }
    return (
      <Hitarea
        key={this.props.id}
        className={ `hit${this.props.activated === true ? ' active' : ''}` }
      >
        {this.props.sound}
      </Hitarea>
    )
  }
}

const Hitarea = styled.div`
  margin: 10px;
  &.active {
    color: blue;
  }
`;
