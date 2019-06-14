import React from "react";
import Word from "./Word";

function Text(props) {
  const generateWords = () =>
    props.words.map((word, index) => (
      <Word
        key={index}
        onCurrentWord={index === props.currentWordIndex}
        onPastWords={index < props.currentWordIndex}
        word={word}
        currentWordSubstring={props.currentWordSubstring}
        input={props.input}
      />
    ));

  return <div className="Words">{generateWords()}</div>;
}

export default Text;
