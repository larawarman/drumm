import React, { Component } from 'react';
import styled from 'styled-components';


export default class Hit extends Component {
  constructor(props) {
    super();
  }

  render() {
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
