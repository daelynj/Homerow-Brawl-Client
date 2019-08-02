import * as React from "react";
import { Player } from "./Player";

interface Props {
  wordsLength: number;
  currentWordIndex: number;
  updatePosition: (newPosition: any) => void;
  raceState: any;
  name: string;
  ID: number;
}

export const Race = (props: Props) => {
  const generateRace = () =>
    props.raceState.players.map((player: any, index: number) => (
      <Player key={index} position={player.position} name={player.name} />
    ));

  const updatePosition = () => {
    let new_position: number = Math.round(
      (props.currentWordIndex / props.wordsLength) * 100
    );
    let old_position: number = props.raceState.players.find(byID).position;

    if (old_position !== new_position) {
      props.updatePosition(new_position);
    }
  };

  const byID = (player: any) => {
    if (player.id === props.ID) {
      return player;
    }
  };

  const raceStart = () => {
    if (props.raceState !== null) {
      return true;
    }
  };

  return (
    <>
      {raceStart() && generateRace()}
      {raceStart() && updatePosition()}
    </>
  );
};
