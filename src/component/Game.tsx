import * as React from "react";
import { useState } from "react";
import { Board } from "./Board";

interface Props {
  updatePosition: (newPosition: number) => void;
  setCountDown: (newCountDown: boolean) => void;
  updateCountDown: (newCountDown: boolean) => void;
  updateStats: (newStats: any) => void;
  setMakeRequests: (newRequest: boolean) => void;
  raceState: any;
  statsState: any;
  name: string;
  countDown: boolean;
  ID: number;
}

export const Game = (props: Props) => {
  const [words] = useState<String[]>(
    "This is text that you are typing in a typing game! This is text that you are typing in a typing game! This is text that you are typing in a typing game!".split(
      " "
    )
  );
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
    if (
      currentInput !== getCurrentWordSubstring() &&
      currentInput.length !== 11
    ) {
      setIncorrectLetters(incorrectLetters + 1);
    }
    return;
  };

  return (
    <Board
      updateCountDown={props.updateCountDown}
      countDown={props.countDown}
      setCountDown={props.setCountDown}
      countUp={countUp}
      setCountUp={setCountUp}
      name={props.name}
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
      ID={props.ID}
      updateStats={props.updateStats}
      statsState={props.statsState}
      setMakeRequests={props.setMakeRequests}
    />
  );
};
