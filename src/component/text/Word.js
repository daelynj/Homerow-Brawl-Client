import React from "react";
import Letter from "./Letter";
import "./css/Word.css";

function Word(props) {
  function generateLetters() {
    let letters = [];

    for (var letterIndex = 0; letterIndex < props.word.length; letterIndex++) {
      letters[letterIndex] = renderLetter(
        props.word[letterIndex],
        setColor(letterIndex),
        letterIndex
      );
    }
    return letters;
  }

  function renderLetter(letter, color, index) {
    return <Letter key={index} color={color} letter={letter} />;
  }

  function setColor(letterIndex) {
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
  }

  return <span className="Word">{generateLetters()}</span>;
}

export default Word;
