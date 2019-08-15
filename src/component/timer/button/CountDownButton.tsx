import * as React from "react";
import "./css/CountDownButton.css";

interface Props {
  handleEvent: (newEvent: any) => void;
}

export const CountDownButton = (props: Props) => (
  <div className="start">
    <button onClick={props.handleEvent}>Start Game</button>
  </div>
);
