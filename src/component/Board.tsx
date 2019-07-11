import * as React from "react";
import { Race } from "./race/Race";
import { Text } from "./text/Text";
import { TypingBox } from "./typingbox/TypingBox";
import { Timer } from "./Timer/Timer";
import { GameStats } from "./gamestats/GameStats";

interface Props {
  words: String[];
  currentWordSubstring: any;
  currentInput: string;
  setCurrentInput: (newInput: string) => void;
  currentWordIndex: number;
  setCurrentWordIndex: (newIndex: number) => void;
  start: boolean;
  setStart: (newStart: boolean) => void;
  endGame: () => boolean;
  finishTime: number;
  setFinishTime: (newTime: number) => void;
  checkLetter: () => void;
  incorrectLetters: number;
  updatePosition: (newPosition: any) => void;
  raceState: any;
  ID: number;
}

export const Board = (props: Props) => {
  const renderRace = () => (
    <Race
      ID={props.ID}
      raceState={props.raceState}
      updatePosition={props.updatePosition}
      wordsLength={props.words.length}
      currentWordIndex={props.currentWordIndex}
    />
  );

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
      value={props.currentInput}
      onChange={props.setCurrentInput}
      setStart={props.setStart}
      word={props.words[props.currentWordIndex]}
      setCurrentWordIndex={props.setCurrentWordIndex}
      currentWordIndex={props.currentWordIndex}
      checkLetter={props.checkLetter}
    />
  );

  const renderTimer = () => <Timer setFinishTime={props.setFinishTime} />;

  const renderGameStats = () => (
    <GameStats
      words={props.words}
      finishTime={props.finishTime}
      incorrectLetters={props.incorrectLetters}
    />
  );

  const shouldRenderTextAndInput = () => (!props.endGame() ? true : false);

  const shouldRenderTimer = () =>
    !props.endGame() && props.start ? true : false;

  const shouldRenderGameStats = () => (props.endGame() ? true : false);

  return (
    <div className="board">
      <div className="race">{renderRace()}</div>
      <div className="text">{shouldRenderTextAndInput() && renderText()}</div>
      <div className="typing-box">
        {shouldRenderTextAndInput() && renderTypingBox()}
      </div>
      <div className="timer">{shouldRenderTimer() && renderTimer()}</div>
      <div className="gamestats">
        {shouldRenderGameStats() && renderGameStats()}
      </div>
    </div>
  );
};
