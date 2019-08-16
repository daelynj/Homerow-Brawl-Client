import * as React from "react";
import "./css/Player.css";

interface Props {
  name: string;
  WPM: number;
  accuracy: number;
  wordsTyped: number;
  time: number;
  mistakes: number;
  place: number;
}

export const Player = (props: Props) => {
  const rank = () => {
    let place = props.place + 1;
    var j = place % 10;
    var k = place % 100;

    if (j === 1 && k !== 11) {
      return place + "st";
    }
    if (j === 2 && k !== 12) {
      return place + "nd";
    }
    if (j === 3 && k !== 13) {
      return place + "rd";
    }
    return place + "th";
  };

  return (
    <span className="player">
      <div>{rank()}</div>
      <div className="player__name">{"name: " + props.name}</div>
      <div>{"WPM: " + props.WPM}</div>
      <div>{"accuracy: " + props.accuracy + "%"}</div>
      <div>{"words typed: " + props.wordsTyped}</div>
      <div>{"time: " + props.time + " seconds"}</div>
      <div>{"mistakes: " + props.mistakes}</div>
    </span>
  );
};
