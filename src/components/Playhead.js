import React, { Component } from 'react';
import styled from 'styled-components';


export default class Playhead extends Component {
  render() {
    return (
      <Indicator
        className="playhead"
      />
    )
  }
}

const Indicator = styled.div`
  margin: 10px;
  height: 10px;
`;
