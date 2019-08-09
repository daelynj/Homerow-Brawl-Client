import * as React from "react";
import "./css/Player.css";

interface Props {
  name: string;
  WPM: number;
  accuracy: number;
  wordsTyped: number;
  time: number;
  mistakes: number;
}

export const Player = (props: Props) => (
  <span className="Player">
    <div>{"name: " + props.name}</div>
    <div>{"WPM: " + props.WPM}</div>
    <div>{"accuracy: " + props.accuracy + "%"}</div>
    <div>{"words typed: " + props.wordsTyped}</div>
    <div>{"time: " + props.time + " seconds"}</div>
    <div>{"mistakes: " + props.mistakes}</div>
  </span>
);
