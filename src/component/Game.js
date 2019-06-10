import React, { useState } from 'react';
import Board from './Board';

function Game() {
  const [words] = useState("this is text".split(" "));
  const [currentWord, setCurrentWord] = useState(0);
  const [currentInput, setCurrentInput] = useState("");
  const [finishTime, setFinishTime] = useState(0);
  const [start, setStart] = useState(false);

  function gameController() {

    //game has not started
    if (!endGame() && !start) {
      let textToCompare = words[currentWord].slice(0, currentInput.length);
      //render text
      //render typing box
      return (
        <Board
          words = {words}
          textToCompare = {textToCompare}
          currentInput = {currentInput}
          setCurrentInput = {setCurrentInput}
          currentWord = {currentWord}
          setCurrentWord = {setCurrentWord}
          start = {start}
          setStart = {setStart}
          renderText = {true}
          renderTypingBox = {true}
        />
      )
    }
    //game has started
    else if (!endGame() && start) {
      let textToCompare = words[currentWord].slice(0, currentInput.length);
      //render text
      //render typing box
      //render timer
      return (
        <Board
          words = {words}
          textToCompare = {textToCompare}
          currentInput = {currentInput}
          setCurrentInput = {setCurrentInput}
          currentWord = {currentWord}
          setCurrentWord = {setCurrentWord}
          start = {start}
          setStart = {setStart}
          finishTime = {finishTime}
          setFinishTime = {setFinishTime}
          checkWord = {checkWord}
          renderText = {true}
          renderTypingBox = {true}
          renderTimer = {true}
        />
      )
    }
    //game is over
    else if (endGame()) {
      //render WPM
      return (
        <Board
          words = {words}
          finishTime = {finishTime}
          renderWordsPerMinute = {true}
        />
      )
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
      return false;
    }
    else {
      return true;
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
