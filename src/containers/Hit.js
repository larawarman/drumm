import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSteps } from '../actions/index';
import Tone from 'tone';
import styled from 'styled-components';


class Hit extends Component {
  constructor(props) {
    super();
    this.toggleHit = this.toggleHit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.state = {isActive: null};
  }

  playSound(sound) {
    const synth = new Tone.MembraneSynth().toMaster();
    if ( sound === 'kick' ){
      synth.triggerAttackRelease('C1', '8n')
    } else if ( sound === 'snare' ) {
      synth.triggerAttackRelease('C2', '8n')
    } else if ( sound === 'openHat' ) {
      synth.triggerAttackRelease('E2', '8n')
    } else if ( sound === 'closedHat' ) {
      synth.triggerAttackRelease('F2', '8n')
    }
  }

  toggleHit() {
    let newPresets = this.props.steps;
    newPresets = newPresets.map((preset, index) => {
      if (index === this.props.activePreset){
        return preset.map(step => {
          return step.hits.map(hit => {
            if (hit.name === this.props.name) {
              hit.activated ? hit.activated = false : hit.activated = true;
              this.props.updateSteps(newPresets);
            }
            return newPresets;
          });
        });
      }
      return newPresets;
    });
    this.updateState();
  }

  updateState() {
    if (this.props.activated === true) {
      this.setState({isActive: false});
    } else if (this.props.activated === false) {
      this.setState({isActive: true});
    }
  }

  render() {
    if ( this.props.isPlaying === 'nowPlaying' && this.props.activated === true ) {
      this.playSound(this.props.sound);
    }
    return (
      <Hitarea
        key={this.props.name}
        className={ `hit${this.props.activated === true || this.state.isActive === true ? ' active' : ''}` }
        onClick={this.toggleHit}
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
  &.active, .tempactive {
    background-color: white;
    opacity: 1.0;
  }
`;

function mapStateToProps(state) {
  return{
    steps: state.steps,
    activePreset: state.activePreset
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateSteps }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Hit);
