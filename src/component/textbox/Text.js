import React from 'react';
import Word from './Word';

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
        wordLocation = {index}
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
