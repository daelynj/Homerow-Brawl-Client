import * as React from "react";
import "./css/Game.css";

interface Props {
  game: any;
}

export const Game = (props: Props) => {
  return (
    <span className="game">
      <div>{"date: " + props.game.created_at}</div>
      <div>{"time taken: " + props.game.time + " seconds"}</div>
      <div>{"WPM: " + props.game.wpm}</div>
      <div>{"accuracy: " + props.game.accuracy + "%"}</div>
      <div>{"mistakes: " + props.game.mistakes}</div>
      <div>{"words typed: " + props.game.words_typed}</div>
      <div>{"letters typed: " + props.game.letters_typed}</div>
    </span>
  );
};
