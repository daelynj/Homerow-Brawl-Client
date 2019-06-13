import React from "react";

function GameStats(props) {
  return (
    <div>
      <div>{"words typed: " + props.wordsLength}</div>
      <div>
        {"WPM: " + Math.round(props.wordsLength / (props.finishTime / 60))}
      </div>
      <div>{"time: " + props.finishTime + " seconds"}</div>
    </div>
  );
}

export default GameStats;
