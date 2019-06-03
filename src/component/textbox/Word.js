import React from 'react';
import LetterDefinition from './LetterDefinition';
import Letter from './Letter';
import './Word.css'

function Word(props) {
  function generateLetters() {
    let letters = [];

    for (var i = 0; i < props.word.length; i++) {
      letters[i] = renderLetter(props.word[i], i);
    }
    return letters;
  }

  function renderLetter(letter, index) {
    return (
      <LetterDefinition
        key = {index}
        letter = {letter}
        text = {props.text}
        currentWord = {props.currentWord}
        input = {props.input}
      />
    )
  }

  return (
    <span className="Word">
      {generateLetters()}
    </span>
  )
}

export default Word;
