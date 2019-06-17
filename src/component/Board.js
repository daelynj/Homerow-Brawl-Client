import React from "react";
import Race from "./race/Race";
import Text from "./text/Text";
import TypingBox from "./typingbox/TypingBox";
import Timer from "./Timer";
import GameStats from "./GameStats";

function Board(props) {
  function renderRace() {
    return (
      <Race
        wordsLength={props.words.length}
        currentWordIndex={props.currentWordIndex}
      />
    );
  }

  function renderText() {
    return (
      <Text
        words={props.words}
        input={props.currentInput}
        currentWordSubstring={props.currentWordSubstring}
        currentWordIndex={props.currentWordIndex}
      />
    );
  }

  function renderTypingBox() {
    return (
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
  }

  function renderTimer() {
    return <Timer finishTime={props.setFinishTime} />;
  }

  function renderGameStats() {
    return (
      <GameStats
        words={props.words}
        finishTime={props.finishTime}
        incorrectLetters={props.incorrectLetters}
      />
    );
  }

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
}

export default Board;
