import React, { Component } from 'react';
import styled from 'styled-components';

import Hit from '../containers/Hit';


export default class StepHits extends Component {
  constructor(props) {
    super();
  }

  renderHits(hits) {
    return this.props.hits.map(hit => {
      return (
        <Hit
          key={hit.name}
          name={hit.name}
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
  margin: 0 10px 5px;
  display: flex;
  flex-flow: column nowrap;
  @media (max-width: 720px) {
    margin: 0 3px 3px;
  }
`;
