import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateBpm } from '../actions/index';
import styled from 'styled-components';

class Bpm extends Component {
  constructor(props) {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.increaseBPM = this.increaseBPM.bind(this);
    this.decreaseBPM = this.decreaseBPM.bind(this);
  }
  onInputChange(event) {
    let bpm = event.target.value;
    if (bpm < 1000 && bpm > 0){
      this.props.updateBpm(bpm);
    } else if (bpm >= 1000) {
      this.props.updateBpm(999);
    } else if (bpm >= 0) {
      this.props.updateBpm(1);
    }

  }
  increaseBPM() {
    if (this.props.bpm < 1000 ){
      this.props.updateBpm(this.props.bpm + 1);
    } else {
      this.props.updateBpm(999);
    }
  }
  decreaseBPM() {
    if (this.props.bpm > 1) {
      this.props.updateBpm(this.props.bpm - 1);
    } else {
      this.props.updateBpm(1);
    }
  }
  render() {
    return (
      <BpmContainer>
        <Input
          name='bpmInput'
          className='bpm-input'
          type='number'
          min='1'
          value={this.props.bpm}
          onChange={this.onInputChange}
        />
        <Arrows>
          <div className='bpm-up' onClick={this.increaseBPM}>&#9662;</div>
          <div className='bpm-down' onClick={this.decreaseBPM}>&#9662;</div>
        </Arrows>
        <label>bpm</label>
      </BpmContainer>
    )
  }
}

const BpmContainer = styled.div`
  max-width: 200px;
`;

const Input = styled.input`
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    display:none;
  }
`;

const Arrows = styled.div`
  display: inline-block;
  .bpm-up {
    transform: rotate(180deg);
  }
`;

function mapStateToProps(state) {
  return{
    bpm: state.bpm
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateBpm }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Bpm);
