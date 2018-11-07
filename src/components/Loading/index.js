import React from 'react'

import './Loading.css'

const Loading = (props) => {
  return(
    <div className='loading'>
      <h2 className='loading-message'>{props.message}</h2>
      <div className='gif-container'>
        <img 
          alt='loading'
          className='loading-gif'
          src={`https://cdn.dribbble.com/users/2524821/screenshots/5358445/untitled-1.gif`}
        />
        <div className='gradient'></div>
      </div>
    </div>
  );
};

export default Loading;