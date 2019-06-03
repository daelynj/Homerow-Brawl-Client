import React from 'react';
import './Letter.css'

function Letter(props) {

  function renderText() {
    return props.letter;
  }

  return (
    <span className="Letter">
      {renderText()}
    </span>
  )
}

export default Letter;
