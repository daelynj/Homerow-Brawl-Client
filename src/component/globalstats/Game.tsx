import * as React from "react";
import "./css/Game.css";

interface Props {
  game: any;
}

export const Game = (props: Props) => {
  const buildDate = () => {
    let timestamp = new Date(Date.parse(props.game.created_at));
    return timestamp.toDateString();
  };
  return (
    <tbody>
      <tr>
        <th>
          <div>Date</div>
        </th>
        <th>
          <div>Time</div>
        </th>
        <th>
          <div>WPM</div>
        </th>
        <th>
          <div>Accuracy</div>
        </th>
        <th>
          <div>Mistakes</div>
        </th>
        <th>
          <div>Words</div>
        </th>
        <th>
          <div>Letters</div>
        </th>
      </tr>
      <tr>
        <td>{buildDate()}</td>
        <td>{props.game.time + " seconds"}</td>
        <td>{props.game.wpm}</td>
        <td>{props.game.accuracy + "%"}</td>
        <td>{props.game.mistakes}</td>
        <td>{props.game.words_typed}</td>
        <td>{props.game.letters_typed}</td>
      </tr>
    </tbody>
  );
};
