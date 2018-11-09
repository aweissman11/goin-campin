import React, { Component } from 'react';

import './Hike.css';

export class Hike extends Component {

  getImage = () => {
    if (this.props.imgMedium.length < 1) {
      return `https://blog.funnewjersey.com/wp-content/uploads/2015/09/best-hiking-trails-in-nj-buttermilk-falls.jpg`
    } else {
      return this.props.imgMedium
    }
  }

  hikeColor = () => `hike-color-${this.props.color}`
  
  render() {
    const { name, summary, url } = this.props;
    const colorClass = this.hikeColor()
    return (
      <div className='photo-container'>
        <img
          src={`${this.getImage()}`}
          alt={`${name}`}
          className='hike-photo'
        />
        <div className={`hike-info ${colorClass}`}>
          <a
            href={`${url}`}
            target='_blank'
          >
            {`${name}`}
          </a>
          <p>{`${summary}`}</p>
        </div>
      </div>
    )
  }
}

export default Hike;

{/* <a target='_blank' href={`${url}`}>{name}</a> */}