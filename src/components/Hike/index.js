import React, { Component } from 'react';

export class Hike extends Component {
  render() {
    const { imgSmall, name, url } = this.props;
    return (
      <div>
        <img src={`${imgSmall}`}  alt={`${name}`}/>
        <a targe='_blank' href={`${url}`}>{name}</a>
      </div>
    )
  }
}

export default Hike;