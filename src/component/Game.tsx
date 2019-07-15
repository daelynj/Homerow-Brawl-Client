import * as React from "react";
import { useState } from "react";
import { Board } from "./Board";

interface Props {
  updatePosition: (newPosition: any) => void;
  setCountDown: (newCountDown: any) => void;
  updateCountDown: (newCountDown: any) => void;
  raceState: any;
  ID: number;
  countDown: boolean;
}

export const Game = (props: Props) => {
  const [words] = useState<String[]>("this is text".split(" "));
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [currentInput, setCurrentInput] = useState<string>("");
  const [finishTime, setFinishTime] = useState<number>(0);
  const [incorrectLetters, setIncorrectLetters] = useState<number>(0);
  const [countUp, setCountUp] = useState<boolean>(false);

  const endGame = () => {
    if (onFinalLetter()) {
      setCurrentWordIndex(currentWordIndex + 1);
      return true;
    }

    return currentWordIndex < words.length ? false : true;
  };

  const onFinalLetter = () => {
    if (
      currentWordIndex === words.length - 1 &&
      currentInput === words[words.length - 1]
    ) {
      return true;
    }
  };

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
            updateCountDown={props.updateCountDown}
            countDown={props.countDown}
            setCountDown={props.setCountDown}
            countUp={countUp}
            setCountUp={setCountUp}
            ID={props.ID}
            raceState={props.raceState}
            updatePosition={props.updatePosition}
            words={words}
            currentWordSubstring={getCurrentWordSubstring()}
            currentInput={currentInput}
            setCurrentInput={setCurrentInput}
            currentWordIndex={currentWordIndex}
            setCurrentWordIndex={setCurrentWordIndex}
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
