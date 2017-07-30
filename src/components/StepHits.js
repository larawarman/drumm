import React, { Component } from 'react';
import styled from 'styled-components';

import Hit from './Hit';


export default class StepHits extends Component {
  constructor(props) {
    super();
  }

  renderHits(hits) {
    return this.props.hits.map(hit => {
      return (
        <Hit
          key={hit.id}
          id={hit.id}
          sound={hit.sound}
          activated={hit.activated}
          isPlaying={this.props.isPlaying}
        />
      );
    });
  }

  render() {
    return (
      <Hits>
        {this.renderHits()}
      </Hits>
    )
  }
}

const Hits = styled.div`
  margin: 10px;
  display: flex;
  flex-flow: column nowrap;
`;
