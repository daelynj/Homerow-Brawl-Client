import React from 'react';

function LetterDefinition(props) {
  function DefineLetter() {
    if (props.input[props.idx] === props.word[props.idx] && props.idx === props.currentWord) {
      return "green";
    }
    else if (props.input[props.idx] !== props.textToCompare[props.idx] && props.idx === props.currentWord) {
      return "red";
    }
    else if (props.idx < props.currentWord) {
      return "green";
    }
    else {
      return "black";
    }
  }

  return (
    DefineLetter()
  )
}

export default LetterDefinition;
