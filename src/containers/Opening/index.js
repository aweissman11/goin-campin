import React, { Component } from 'react';

export class Opening extends Component {
  render() {
    return (
        <div 
          className='intro-animation-container'
          onClick={() => this.props.completeOpening()}
        >
        </div>
    )
  }
}

export default Opening;