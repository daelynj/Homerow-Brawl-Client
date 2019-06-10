import React from 'react';
import Word from './Word';

function Text(props) {
  const generateWords = () => (
    props.words.map((word, index) => (
      <Word
        key = {index}
        wordIndex = {index}
        word = {word}
        currentWordSubstring = {props.currentWordSubstring}
        input = {props.input}
        currentWordIndex = {props.currentWordIndex}
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
