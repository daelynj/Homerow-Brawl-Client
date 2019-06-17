import * as React from "react";
import { useState } from "react";
import { Board } from "./Board";

export const Game = () => {
  const [words] = useState<String[]>("this is text".split(" "));
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [currentInput, setCurrentInput] = useState<string>("");
  const [finishTime, setFinishTime] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);
  const [incorrectLetters, setIncorrectLetters] = useState<number>(0);

  const endGame = () => (currentWordIndex < words.length ? false : true);

  const getCurrentWordSubstring = () => {
    if (!endGame()) {
      return words[currentWordIndex].slice(0, currentInput.length);
    }
  };

  const checkLetter = () => {
    if (currentInput !== getCurrentWordSubstring()) {
      setIncorrectLetters(incorrectLetters + 1);
    }
    return;
  };

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
};
