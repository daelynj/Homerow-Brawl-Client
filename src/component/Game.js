import React, { useState } from 'react';
import Board from './Board';

function Game() {
  const [words] = useState("this is text".split(" "));
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentInput, setCurrentInput] = useState("");
  const [finishTime, setFinishTime] = useState(0);
  const [start, setStart] = useState(false);

  const endGame = () => currentWordIndex < words.length ? false : true;

  function checkWord() {
    if (currentInput === words[currentWordIndex]) {
      setCurrentInput('');
      setCurrentWordIndex(currentWordIndex+1);
      return true;
    }
  }

  function getCurrentWordSubstring() {
    if (!endGame()) {
      return words[currentWordIndex].slice(0, currentInput.length);
    }
  }

  return (
    <div className="game">
      <div className="board">
        {
          <Board
            words = {words}
            currentWordSubstring = {getCurrentWordSubstring()}
            currentInput = {currentInput}
            setCurrentInput = {setCurrentInput}
            currentWordIndex = {currentWordIndex}
            setCurrentWordIndex = {setCurrentWordIndex}
            start = {start}
            setStart = {setStart}
            endGame = {endGame}
            finishTime = {finishTime}
            setFinishTime = {setFinishTime}
            checkWord = {checkWord}
        />
        }
      </div>
    </div>
  )
}

export default Game;
