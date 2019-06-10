import React from 'react';
import Word from './Word';

function Text(props) {
  const generateWords = () => (
    props.words.map((word, index) => (
      <Word
        key = {index}
        wordIndex = {index}
        word = {word}
        textToCompare = {props.textToCompare}
        input = {props.input}
        currentWord = {props.currentWord}
      />
    ))
  )
  
  return (
    <div className="Words">
      {generateWords()}
    </div>
  )
}

export default Text;