import React from "react";

function GameStats(props) {
  function calculateAccuracy() {
    var letters = 0;
    props.words.map(word => {
      return (letters = letters + word.length);
    });

    let accuracy = (
      ((letters - props.incorrectLetters) / letters) *
      100
    ).toFixed(1);

    return accuracy > 0 ? accuracy : 0;
  }
  return (
    <div>
      <div>{"words typed: " + props.words.length}</div>
      <div>
        {"WPM: " + Math.round(props.words.length / (props.finishTime / 60))}
      </div>
      <div>{"time: " + props.finishTime + " seconds"}</div>
      <div>{"incorrect letters: " + props.incorrectLetters}</div>
      <div>{"accuracy: " + calculateAccuracy() + "%"}</div>
    </div>
  );
}

export default GameStats;
