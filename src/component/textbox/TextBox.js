import React from 'react';
import Text from './Text';

function TextBox(props) {
  let currentLetters = props.text[props.currentWord].slice(0, props.input.length);
  function renderText() {
    return (
      <Text
        text = {props.text}
        currentLetters = {currentLetters}
        input = {props.input}
      />
    )
  }

  return (
    <div className="TextBox">
      {renderText()}
    </div>
  )
}

export default TextBox;
