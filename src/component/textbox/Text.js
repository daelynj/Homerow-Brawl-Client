import React from 'react';
import Word from './Word';

function Text(props) {
  function generateWords() {
    let words = props.text.map((word, index) => {
      return renderWord(word, index);
    });
    return words;
  }

  function renderWord(word, index) {
    return (
      <Word
        key = {index}
        wordIndex = {index}
        word = {word}
        textToCompare = {props.textToCompare}
        input = {props.input}
        currentWord = {props.currentWord}
      />
    )
  }

  return (
    <div className="Words">
      {generateWords()}
    </div>
  )
}

export default Text;
