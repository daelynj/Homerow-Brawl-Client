import React, { useState } from 'react';
import Text from './text/Text';
import TypingBox from './typingbox/TypingBox';
import Timer from './Timer'
import WordsPerMinute from './WordsPerMinute';

function Board(props) {
  const [words] = useState(props.text.split(" "));
  const [currentWord, setCurrentWord] = useState(0);
  const [currentInput, setCurrentInput] = useState("");
  const [finishTime, setFinishTime] = useState(0);

  //this if statement only allows the text box to render while we have words
  //to type so that we don't slice non-existent text (this results in a crash)
  function renderText() {
    //if (currentWord < words.length) {
    if (!endGame()) {
      let textToCompare = words[currentWord].slice(0, currentInput.length);
      return (
        <Text
          words = {words}
          input = {currentInput}
          textToCompare = {textToCompare}
          currentWord = {currentWord}
        />
      )
    }
  }

  function renderTypingBox() {
    if (!endGame()) {
      return (
        <TypingBox
          value = {currentInput}
          onChange = {setCurrentInput}
          onWordComplete = {checkWord}
          setStart = {props.setStart}
        />
      )
    }
  }

  //only start the timer when a key is hit
  function renderTimer() {
    if (props.start) {
      if (!endGame()) {
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
            wordsLength = {words.length}
            finishTime = {finishTime}
          />
        )
      }
    }
  }

  function checkWord() {
    if (currentInput === words[currentWord]) {
      setCurrentInput('');
      setCurrentWord(currentWord+1);
      return true;
    }
  }

  function endGame() {
    if (currentWord < words.length) {
      props.setEndGame(false);
      return false;
    }
    else {
      props.setEndGame(true);
      return true;
    }
  }

  return (
    <div className="board">
      <div className="text">
        {renderText()}
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
