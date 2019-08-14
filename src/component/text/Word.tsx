import * as React from "react";
import { Letter } from "./Letter";

interface Props {
  word: String;
  input: string;
  onCurrentWord: boolean;
  currentWordSubstring: string;
  onPastWords: boolean;
}

export const Word = (props: Props) => {
  const generateLetters = () =>
    props.word
      .split("")
      .map((letter, index) => renderLetter(index, setColor(index), letter));

  const renderLetter = (index: number, color: string, letter: string) => {
    return <Letter key={index} color={color} letter={letter} />;
  };

  const setColor = (letterIndex: number) => {
    if (
      props.input[letterIndex] === props.word[letterIndex] &&
      props.onCurrentWord
    ) {
      return "green";
    } else if (
      props.input[letterIndex] !== props.currentWordSubstring[letterIndex] &&
      props.onCurrentWord
    ) {
      return "red";
    } else if (props.onPastWords) {
      return "green";
    } else {
      return "black";
    }
  };

  return <span>{generateLetters()}</span>;
};
