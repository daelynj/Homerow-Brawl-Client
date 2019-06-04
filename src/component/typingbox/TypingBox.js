import React from 'react';

function TypingBox(props) {
  function handleChange(event) {
    props.start(true);
    props.onChange(event.target.value);
  }

  function detectSpace(event) {
    var code = event.keyCode || event.which;
    if (code === 32) {
      if (props.onWordComplete()) {
        event.preventDefault();
      }
    }
  }
  
  return (
    <div className="TypingBox">
      <input 
        type="text" 
        value={props.value}
        onChange={handleChange}
        onKeyDown={detectSpace}
      />
    </div>
  )
}

export default TypingBox;
