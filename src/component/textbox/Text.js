import React from 'react';
import Word from './Word';
import './Text.css';

function Text(props) {
  function generateWords() {
    let words = [];
    for (var i = 0; i < props.text.length; i++) {
      words[i] = renderWord(props.text[i], i);
    }
    return words;
  }

  function renderWord(word, index) {
    return (
      <Word
        key = {index}
        word = {word}
        currentLetters = {props.currentLetters}
        input = {props.input}
      />
    )
  }

  return (
    <div className="Text">
      {generateWords()}
    </div>
  )
}

export default Text;
