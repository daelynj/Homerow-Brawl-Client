import React from 'react';
import Letter from './Letter';
import './css/Word.css';

function Word(props) {
  function generateLetters() {
    let letters = [];

    for (var letterIndex = 0; letterIndex < props.word.length; letterIndex++) {
      letters[letterIndex] = renderLetter(
        props.word[letterIndex],
        setColor(letterIndex),
        letterIndex
      );
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

  function setColor(letterIndex) {
    if (props.input[letterIndex] === props.word[letterIndex] && props.wordIndex === props.currentWordIndex) {
      return "green";
    }
    else if (props.input[letterIndex] !== props.textToCompare[letterIndex] && props.wordIndex === props.currentWordIndex) {
      return "red";
    }
    else if (props.wordIndex < props.currentWordIndex) {
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
