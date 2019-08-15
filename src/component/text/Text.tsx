import * as React from "react";
import { Word } from "./Word";
import "./css/Text.css";

interface Props {
  words: String[];
  currentWordIndex: number;
  currentWordSubstring: string;
  input: string;
}

export const Text = (props: Props) => {
  const generateWords = () =>
    props.words.map((word, index) => (
      <Word
        key={index}
        onCurrentWord={index === props.currentWordIndex}
        onPastWords={index < props.currentWordIndex}
        word={word + " "}
        currentWordSubstring={props.currentWordSubstring}
        input={props.input}
      />
    ));

  return <div className="text">{generateWords()}</div>;
};
