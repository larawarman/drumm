import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSteps } from '../actions/index';
import * as sounds from '../actions/sounds';
import styled from 'styled-components';


class Hit extends Component {
  constructor(props) {
    super();
    this.toggleHit = this.toggleHit.bind(this);

    this.state = {isActive: props.activated};
  }

  playSound(sound) {
    if ( sound === 'kick' ){
      sounds.MEMBRANE.triggerAttackRelease('C1', '8n')
    } else if ( sound === 'snare' ) {
      sounds.MEMBRANE.triggerAttackRelease('E2', '8n')
      sounds.NOISE.triggerAttackRelease('8n')
    } else if ( sound === 'openHat' ) {
      sounds.METAL.triggerAttackRelease('8n')
    } else if ( sound === 'closedHat' ) {
      sounds.METAL.triggerAttackRelease('32n')
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
    if ( this.state.isActive === 'active' ){
      this.setState({isActive: 'inactive'});
    } else {
      this.setState({isActive: 'active'});
    }
  }

  render() {
    if ( this.props.isPlaying === true && this.props.nowPlaying === 'nowPlaying' && this.props.activated === 'active' ) {
      this.playSound(this.props.sound);
    }
    return (
      <Hitarea
        key={this.props.name}
        className={ `hit ${this.state.isActive}` }
        onClick={this.toggleHit}
      >
      </Hitarea>
    )
  }
}

const Hitarea = styled.div`
  flex-basis: 60px;
  min-width: 60px;
  background-color: black;
  margin: 10px 0;
  border-radius: 4px;
  opacity: 0.5;
  transition: opacity 0.3s;
  cursor: pointer;
  &.active {
    background-color: white;
    opacity: 1.0;
  }
  &.inactive {
    background-color: black;
    opacity: 0.5;
  }
  &:hover {
    opacity: 0.7;
    transition: opacity 0.3s;
  }
  @media (max-width: 720px) {
    flex-basis: 30px;
    min-width: 30px;
  }
`;

function mapStateToProps(state) {
  return{
    steps: state.steps,
    activePreset: state.activePreset,
    isPlaying: state.isPlaying
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateSteps }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Hit);
