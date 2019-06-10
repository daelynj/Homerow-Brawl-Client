import React from 'react';
import Text from './text/Text';
import TypingBox from './typingbox/TypingBox';
import Timer from './Timer'
import WordsPerMinute from './WordsPerMinute';

function Board(props) {
  function renderText() {
    return (
      <Text
        words = {props.words}
        input = {props.currentInput}
        textToCompare = {props.textToCompare}
        currentWord = {props.currentWord}
      />
    )
  }

  function renderTypingBox() {
    return (
      <TypingBox
        value = {props.currentInput}
        onChange = {props.setCurrentInput}
        onWordComplete = {props.checkWord}
        setStart = {props.setStart}
      />
    )
  }

  function renderTimer() {
    return (
      <Timer
        time = {0}
        finishTime = {props.setFinishTime}
      />
    )
  }

  function renderWordsPerMinute() {
    return (
      <WordsPerMinute
        wordsLength = {props.words.length}
        finishTime = {props.finishTime}
      />
    )
  }

  return (
    <div className="board">
      <div className="text">
        {props.renderText && renderText()}
      </div>
      <div className='typing-box'>
        {props.renderTypingBox && renderTypingBox()}
      </div>
      <div className="timer">
        {props.renderTimer && renderTimer()}
      </div>
      <div className="wordsperminute">
        {props.renderWordsPerMinute && renderWordsPerMinute()}
      </div>
    </div>
  )
}

export default Board;
