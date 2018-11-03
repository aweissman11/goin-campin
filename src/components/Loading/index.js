import React from 'react'

// import './Loading.css'

const Loading = (props) => {
  return(
    <div>
      <h2>{props.message}</h2>
      <img src={`https://cdn.dribbble.com/users/2524821/screenshots/5358445/untitled-1.gif`} />
    </div>
  );
};

export default Loading;