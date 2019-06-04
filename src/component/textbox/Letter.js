import React from 'react';
import './Letter.css'

function Letter(props) {

  return (
    <span className={props.color}>
      {props.letter}
    </span>
  )
}

export default Letter;
