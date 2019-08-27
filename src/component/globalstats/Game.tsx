import * as React from "react";
import "./css/Game.css";

interface Props {
  game: any;
}

export const Game = (props: Props) => {
  return (
    <div className="game">
      <span className="individualhistory">
        {"date: " + props.game.created_at}
      </span>
      <span className="individualhistory">
        {"time taken: " + props.game.time + " seconds"}
      </span>
      <span className="individualhistory">{"WPM: " + props.game.wpm}</span>
      <span className="individualhistory">
        {"accuracy: " + props.game.accuracy + "%"}
      </span>
      <span className="individualhistory">
        {"mistakes: " + props.game.mistakes}
      </span>
      <span className="individualhistory">
        {"words typed: " + props.game.words_typed}
      </span>
      <span className="individualhistory">
        {"letters typed: " + props.game.letters_typed}
      </span>
    </div>
  );
};
