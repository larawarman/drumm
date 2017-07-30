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
          <i className="fa fa-caret-up" aria-hidden="true" onClick={this.increaseBPM}></i>
          <i className="fa fa-caret-down" aria-hidden="true" onClick={this.decreaseBPM}></i>
        </Arrows>
      </BpmContainer>
    )
  }
}

const BpmContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const Input = styled.input`
  font-size: 3em;
  background-color: transparent;
  border: none;
  box-shadow: 0px 3px 0px 0px rgba(255,255,255,0.4);
  color: rgba(255,255,255,0.8);
  max-width: 80px;
  text-align: center;
  transition: all 0.3s;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    display:none;
  }
  &:hover {
    color: rgba(255,255,255,1);
    box-shadow: 0px 3px 0px 0px rgba(255,255,255,0.8);
    transition: all 0.3s;
  }
`;

const Arrows = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  font-size: 2em;
  margin: 0 20px;
  color: rgba(255,255,255,0.8);
  transition: color 0.3s;
  cursor: pointer;
  .fa:hover {
    color: rgba(255,255,255,1);
    transition: color 0.3s;
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
