import React from "react";

function GameStats(props) {
  function getLettersTyped() {
    return props.words.join("").length;
  }

  function calculateAccuracy() {
    var letters = getLettersTyped();
    let accuracy = (
      ((letters - props.incorrectLetters) / letters) *
      100
    ).toFixed(1);

    return accuracy > 0 ? accuracy : 0;
  }

  //https://www.speedtypingonline.com/typing-equations
  function calculateWPM() {
    let allTypedEntries = getLettersTyped();
    let averageWordLength = 5;
    let timePlayed = props.finishTime / 60;
    let grossWPM = allTypedEntries / averageWordLength / timePlayed;

    return Math.round(grossWPM);
  }

  return (
    <div>
      <div>{"words typed: " + props.words.length}</div>
      <div>{"WPM: " + calculateWPM()}</div>
      <div>{"time: " + props.finishTime + " seconds"}</div>
      <div>{"mistakes: " + props.incorrectLetters}</div>
      <div>{"accuracy: " + calculateAccuracy() + "%"}</div>
    </div>
  );
}

export default GameStats;
