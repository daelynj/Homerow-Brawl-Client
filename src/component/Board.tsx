import * as React from "react";
import { Race } from "./race/Race";
import { Text } from "./text/Text";
import { TypingBox } from "./typingbox/TypingBox";
import { Timer } from "./timer/Timer";
import { GameStats } from "./gamestats/GameStats";
import { CountDown } from "./timer/CountDown";

interface Props {
  setCurrentInput: (newInput: string) => void;
  setCurrentWordIndex: (newIndex: number) => void;
  setCountUp: (newCountUp: boolean) => void;
  setFinishTime: (newTime: number) => void;
  updatePosition: (newPosition: any) => void;
  setCountDown: (newCountDown: any) => void;
  updateCountDown: (updateCountDown: any) => void;
  endGame: () => boolean;
  checkLetter: () => void;
  currentWordIndex: number;
  finishTime: number;
  incorrectLetters: number;
  ID: number;
  countDown: boolean;
  countUp: boolean;
  words: String[];
  currentInput: string;
  currentWordSubstring: any;
  raceState: any;
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
      countUp={props.countUp}
      value={props.currentInput}
      onChange={props.setCurrentInput}
      word={props.words[props.currentWordIndex]}
      setCurrentWordIndex={props.setCurrentWordIndex}
      currentWordIndex={props.currentWordIndex}
      checkLetter={props.checkLetter}
    />
  );

  const renderTimerUp = () => <Timer setFinishTime={props.setFinishTime} />;

  const renderGameStats = () => (
    <GameStats
      words={props.words}
      finishTime={props.finishTime}
      incorrectLetters={props.incorrectLetters}
    />
  );

  const renderTimerDown = () => (
    <CountDown
      updateCountDown={props.updateCountDown}
      countUp={props.countUp}
      setCountUp={props.setCountUp}
      countDown={props.countDown}
      setCountDown={props.setCountDown}
    />
  );

  const shouldRenderTextAndInput = () => (!props.endGame() ? true : false);

  const shouldRenderTimer = () =>
    !props.endGame() && props.countUp ? true : false;

  const shouldRenderGameStats = () => (props.endGame() ? true : false);

  return (
    <div className="board">
      <div className="race">{renderRace()}</div>
      <div className="text">{shouldRenderTextAndInput() && renderText()}</div>
      <div className="typing-box">
        {shouldRenderTextAndInput() && renderTypingBox()}
      </div>
      <div className="timerUp">{shouldRenderTimer() && renderTimerUp()}</div>
      <div className="gamestats">
        {shouldRenderGameStats() && renderGameStats()}
      </div>
      <div className="timerDown">
        {!shouldRenderTimer() && renderTimerDown()}
      </div>
    </div>
  );
};
