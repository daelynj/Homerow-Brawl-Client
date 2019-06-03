import React from 'react';
import Text from './Text';

function TextBox(props) {
  function renderText() {
    return (
      <Text
        text = {props.text}
        currentWord = {props.currentWord}
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
