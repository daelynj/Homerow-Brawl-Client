import * as React from "react";
import { Player } from "./Player";
import "./css/GameStats.css";

interface Props {
  updateStats: (newStats: any) => void;
  statsState: any;
  endGame: () => boolean;
  words: String[];
  incorrectLetters: number;
  finishTime: number;
  ID: number;
}

export const GameStats = (props: Props) => {
  const generateStats = () =>
    props.statsState.players.map((player: any, index: number) => (
      <Player
        key={index}
        place={index}
        name={player.name}
        WPM={player.wpm}
        accuracy={player.accuracy}
        wordsTyped={player.words_typed}
        time={player.time}
        mistakes={player.mistakes}
      />
    ));

  const updateStats = () => {
    let new_stats = {
      wordsTyped: props.words.length,
      time: props.finishTime,
      mistakes: props.incorrectLetters,
      lettersTyped: props.words.join("").length
    };

    if (props.statsState === null) {
      props.updateStats(new_stats);
    } else if (typeof props.statsState.players.find(byID) === "undefined") {
      props.updateStats(new_stats);
    }
  };

  const byID = (player: any) => {
    if (player.id === props.ID) {
      return player;
    }
  };

  return (
    <>
      <div className="stats">
        {props.statsState !== null && generateStats()}
      </div>
      {props.endGame() && updateStats()}
    </>
  );
};
