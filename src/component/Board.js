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
        currentWordSubstring = {props.currentWordSubstring}
        currentWordIndex = {props.currentWordIndex}
      />
    )
  }

  function renderTypingBox() {
    return (
      <TypingBox
        value = {props.currentInput}
        onChange = {props.setCurrentInput}
        setStart = {props.setStart}
        word = {props.words[props.currentWordIndex]}
        setCurrentWordIndex = {props.setCurrentWordIndex}
        currentWordIndex = {props.currentWordIndex}
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

  const shouldRenderTextAndInput = () => !props.endGame() ? true : false;

  const shouldRenderTimer = () => !props.endGame() && props.start ? true : false;

  const shouldRenderWordsPerMinute = () => props.endGame() ? true : false;

  return (
    <div className="board">
      <div className="text">
        {shouldRenderTextAndInput() && renderText()}
      </div>
      <div className='typing-box'>
        {shouldRenderTextAndInput() && renderTypingBox()}
      </div>
      <div className="timer">
        {shouldRenderTimer() && renderTimer()}
      </div>
      <div className="wordsperminute">
        {shouldRenderWordsPerMinute() && renderWordsPerMinute()}
      </div>
    </div>
  )
}

export default Board;
