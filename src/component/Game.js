import React, { useState } from "react";
import Board from "./Board";

function Game() {
  const [words] = useState("this is text".split(" "));
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentInput, setCurrentInput] = useState("");
  const [finishTime, setFinishTime] = useState(0);
  const [start, setStart] = useState(false);
  const [incorrectLetters, setIncorrectLetters] = useState(0);

  const endGame = () => (currentWordIndex < words.length ? false : true);

  function getCurrentWordSubstring() {
    if (!endGame()) {
      return words[currentWordIndex].slice(0, currentInput.length);
    }
  }

  function checkLetter() {
    if (currentInput !== getCurrentWordSubstring()) {
      setIncorrectLetters(incorrectLetters + 1);
    }
    return;
  }

  return (
    <div className="game">
      <div className="board">
        {
          <Board
            words={words}
            currentWordSubstring={getCurrentWordSubstring()}
            currentInput={currentInput}
            setCurrentInput={setCurrentInput}
            currentWordIndex={currentWordIndex}
            setCurrentWordIndex={setCurrentWordIndex}
            start={start}
            setStart={setStart}
            endGame={endGame}
            finishTime={finishTime}
            setFinishTime={setFinishTime}
            checkLetter={checkLetter}
            incorrectLetters={incorrectLetters}
          />
        }
      </div>
    </div>
  );
}

export default Game;
