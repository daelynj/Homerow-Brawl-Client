import React from 'react';
import Letter from './Letter';
import './Word.css'

function LetterDefinition(props) {
  function DefineLetter() {
    let inputLength = props.input.length;
    let currentLetters = props.text[props.currentWord].slice(0, inputLength);
  
    if (props.input !== '' && props.input === currentLetters) {
      return (
        <span className="green">
          <Letter
            letter = {props.letter}
          />
        </span>
      )
    }
    else if (props.input !== '' && props.input !== currentLetters) {
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
