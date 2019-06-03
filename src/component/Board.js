import React, { useState } from 'react';
import TextBox from './textbox/TextBox';
import TypingBox from './typingbox/TypingBox';

function Board(props) {
  const [text] = useState(props.text.split(" "));
  const [currentWord, setCurrentWord] = useState(0);
  const [currentInput, setCurrentInput] = useState("");

  function renderTextBox() {
    return (
      <TextBox
        text = {text}
        input = {currentInput}
        currentWord = {currentWord}
      />
    )
  }

  function renderTypingBox() {
    return (
      <TypingBox
        value = {currentInput}
        onChange = {setCurrentInput}
        onWordComplete = {checkWord}
      />
    )
  }

  function checkWord() {
    if (currentInput === text[currentWord]) {
      setCurrentInput('');
      setCurrentWord(currentWord+1);
      return true;
    }
  }

  return (
    <div className="boxes">
      <div className="text-box">
        {renderTextBox()}
      </div>
      <div className='typing-box'>
        {renderTypingBox()}
        {currentInput}
      </div>
    </div>
  )
}

export default Board;
