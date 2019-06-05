import React, { useState } from 'react';
import TextBox from './textbox/TextBox';
import TypingBox from './typingbox/TypingBox';
import Timer from './Timer'
import WordsPerMinute from './WordsPerMinute';

function Board(props) {
  const [text] = useState(props.text.split(" "));
  const [currentWord, setCurrentWord] = useState(0);
  const [currentInput, setCurrentInput] = useState("");
  const [finishTime, setFinishTime] = useState(0);
  const [start, setStart] = useState(false);

  //this if statement only allows the text box to render while we have words
  //to type so that we don't slice non-existent text (this results in a crash)
  function renderTextBox() {
    if (currentWord < text.length) {
      let textToCompare = text[currentWord].slice(0, currentInput.length);
      return (
        <TextBox
          text = {text}
          input = {currentInput}
          textToCompare = {textToCompare}
          currentWord = {currentWord}
        />
      )
    }
  }

  function renderTypingBox() {
    if (currentWord < text.length) {
      return (
        <TypingBox
          value = {currentInput}
          onChange = {setCurrentInput}
          onWordComplete = {checkWord}
          start = {setStart}
        />
      )
    }
  }

  function checkWord() {
    if (currentInput === text[currentWord]) {
      setCurrentInput('');
      setCurrentWord(currentWord+1);
      return true;
    }
  }

  //only start the timer when a key is hit
  function renderTimer() {
    if (start) {
      if (currentWord < text.length) {
        return (
          <Timer
            time = {0}
            finishTime = {setFinishTime}
          />
        )
      }
      else {
        return (
          <WordsPerMinute
            textLength = {text.length}
            finishTime = {finishTime}
          />
        )
      }
    }
  }

  return (
    <div className="boxes">
      <div className="text-box">
        {renderTextBox()}
      </div>
      <div className='typing-box'>
        {renderTypingBox()}
      </div>
      <div className="timer">
        {renderTimer()}
      </div>
    </div>
  )
}

export default Board;
