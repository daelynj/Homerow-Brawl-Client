import React, { useState } from 'react';
import Board from './Board';

function Game() {
  const [words] = useState("this is text".split(" "));
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentInput, setCurrentInput] = useState("");
  const [finishTime, setFinishTime] = useState(0);
  const [start, setStart] = useState(false);

  function gameController() {
    return (
      <Board
        words = {words}
        textToCompare = {findTextToCompare()}
        currentInput = {currentInput}
        setCurrentInput = {setCurrentInput}
        currentWordIndex = {currentWordIndex}
        setCurrentWordIndex = {setCurrentWordIndex}
        start = {start}
        setStart = {setStart}
        finishTime = {finishTime}
        setFinishTime = {setFinishTime}
        checkWord = {checkWord}
        renderTextAndInput = {shouldRenderTextAndInput()}
        renderTimer = {shouldRenderTimer()}
        renderWordsPerMinute = {shouldRenderWordsPerMinute()}
      />
    )
  }

  const shouldRenderTextAndInput = () => !endGame() ? true : false;

  const shouldRenderTimer = () => !endGame() && start ? true : false;

  const shouldRenderWordsPerMinute = () => endGame() ? true : false;

  const endGame = () => currentWordIndex < words.length ? false : true;

  function checkWord() {
    if (currentInput === words[currentWordIndex]) {
      setCurrentInput('');
      setCurrentWordIndex(currentWordIndex+1);
      return true;
    }
  }

  function findTextToCompare() {
    if (!endGame()) {
      return words[currentWordIndex].slice(0, currentInput.length);
    }
  }

  return (
    <div className="game">
      <div className="board">
        {gameController()}
      </div>
    </div>
  )
}

export default Game;

// return (
//   <Board
//     words = {words}

//     currentInput = {currentInput}
//     setCurrentInput = {setCurrentInput}

//     currentWord = {currentWord}
//     setCurrentWord = {setCurrentWord}

//     endGame = {endGameCheck}

//     start = {start}
//     setStart = {setStart}

//     checkWord = {checkWord}

//     finishTime = {finishTime}
//     setFinishTime = {setFinishTime}

//     renderText = {true}
//     renderTypingBox = {true}
//     renderTimer = {true}
//     renderWPM = {true}
//   />
// )
