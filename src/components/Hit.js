import React, { Component } from 'react';
import Tone from 'tone';
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
    if ( this.props.isPlaying === 'nowPlaying' && this.props.activated === true ) {
      this.playSound(this.props.sound);
    }
    return (
      <Hitarea
        key={this.props.id}
        className={ `hit${this.props.activated === true ? ' active' : ''}` }
      >
      </Hitarea>
    )
  }
}

const Hitarea = styled.div`
  flex-basis: 60px;
  background-color: black;
  min-width: 60px;
  margin: 10px 0;
  border-radius: 4px;
  opacity: 0.5;
  &.active {
    background-color: white;
    opacity: 1.0;
  }
`;
