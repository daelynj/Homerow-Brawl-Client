import * as React from "react";
import "./css/Letter.css";

interface Props {
  color: string;
  letter: string;
}

export const Letter = (props: Props) => (
  <span className={props.color}>{props.letter}</span>
);
