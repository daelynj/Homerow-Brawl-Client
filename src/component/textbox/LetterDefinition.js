import React from 'react';
import Letter from './Letter';

function LetterDefinition(props) {
  function DefineLetter() {
    if (props.input !== '' && props.input === props.textToCompare) {
      return (
        <span className="green">
          <Letter
            letter = {props.letter}
          />
        </span>
      )
    }
    else if (props.input !== '' && props.input !== props.textToCompare) {
      return (
        <span className="red">
          <Letter
            letter = {props.letter}
          />
        </span>
      )
    }
    else {
      return (
        <span className="black">
        <Letter
          letter = {props.letter}
        />
      </span>
      )
    }
  }

  return (
    DefineLetter()
  )
}

export default LetterDefinition;
