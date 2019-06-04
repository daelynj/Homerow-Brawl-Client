import React from 'react';
import Text from './Text';

function TextBox(props) {
  return (
    <div className="Text">
      <Text
        text = {props.text}
        textToCompare = {props.textToCompare}
        input = {props.input}
        currentWord = {props.currentWord}
      />
    </div>
  )
}

export default TextBox;
