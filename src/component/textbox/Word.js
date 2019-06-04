import React from 'react';
import Letter from './Letter';
import './Word.css'

function Word(props) {
  function generateLetters() {
    let letters = [];

    for (var i = 0; i < props.word.length; i++) {
      letters[i] = renderLetter(props.word[i], setColor(i), i);
    }
    return letters;
  }

  function renderLetter(letter, color, index) {
    return (
      <Letter
        key = {index}
        color = {color}
        letter = {letter}
      />
    )
  }

  function setColor(i) {
    if (props.input[i] === props.word[i] && props.idx === props.currentWord) {
      return "green";
    }
    else if (props.input[i] !== props.textToCompare[i] && props.idx === props.currentWord) {
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
    <span className="Word">
      {generateLetters()}
    </span>
  )
}

export default Word;
