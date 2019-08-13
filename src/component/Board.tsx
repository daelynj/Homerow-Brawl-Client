import * as React from "react";
import { Race } from "./race/Race";
import { Text } from "./text/Text";
import { TypingBox } from "./typingbox/TypingBox";
import { Timer } from "./timer/Timer";
import { GameStats } from "./gamestats/GameStats";

interface Props {
  setCurrentInput: (newInput: string) => void;
  setCurrentWordIndex: (newIndex: number) => void;
  setCountUp: (newCountUp: boolean) => void;
  setFinishTime: (newTime: number) => void;
  updatePosition: (newPosition: number) => void;
  setCountDown: (newCountDown: boolean) => void;
  updateCountDown: (updateCountDown: boolean) => void;
  endGame: () => boolean;
  checkLetter: () => void;
  updateStats: (newStats: any) => void;
  currentWordIndex: number;
  finishTime: number;
  incorrectLetters: number;
  name: string;
  ID: number;
  countDown: boolean;
  countUp: boolean;
  words: String[];
  currentInput: string;
  currentWordSubstring: any;
  raceState: any;
  statsState: any;
}

export const Board = (props: Props) => {
  const renderText = () => (
    <Text
      words={props.words}
      input={props.currentInput}
      currentWordSubstring={props.currentWordSubstring}
      currentWordIndex={props.currentWordIndex}
    />
  );

  const renderTypingBox = () => (
    <TypingBox
      countUp={props.countUp}
      value={props.currentInput}
      onChange={props.setCurrentInput}
      word={props.words[props.currentWordIndex]}
      setCurrentWordIndex={props.setCurrentWordIndex}
      currentWordIndex={props.currentWordIndex}
      checkLetter={props.checkLetter}
    />
  );

  const renderTimer = () => (
    <Timer
      setFinishTime={props.setFinishTime}
      updateCountDown={props.updateCountDown}
      countUp={props.countUp}
      setCountUp={props.setCountUp}
      countDown={props.countDown}
      setCountDown={props.setCountDown}
    />
  );

  return (
    <>
      {
        <Race
          ID={props.ID}
          name={props.name}
          raceState={props.raceState}
          updatePosition={props.updatePosition}
          wordsLength={props.words.length}
          currentWordIndex={props.currentWordIndex}
        />
      }
      {!props.endGame() && renderText()}
      {!props.endGame() && renderTypingBox()}
      {!props.endGame() && renderTimer()}
      {
        <GameStats
          ID={props.ID}
          endGame={props.endGame}
          words={props.words}
          finishTime={props.finishTime}
          incorrectLetters={props.incorrectLetters}
          updateStats={props.updateStats}
          statsState={props.statsState}
        />
      }
    </>
  );
};
