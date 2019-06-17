import * as React from "react";

interface Props {
  words: String[];
  incorrectLetters: number;
  finishTime: number;
}

export const GameStats = (props: Props) => {
  const getLettersTyped = () => {
    return props.words.join("").length;
  };

  const calculateAccuracy = () => {
    let letters: number = getLettersTyped();
    let accuracy: any = (
      ((letters - props.incorrectLetters) / letters) *
      100
    ).toFixed(1);

    return accuracy > 0 ? accuracy : 0;
  };

  //https://www.speedtypingonline.com/typing-equations
  const calculateWPM = () => {
    let allTypedEntries: number = getLettersTyped();
    let averageWordLength: number = 5;
    let timePlayed: number = props.finishTime / 60;
    let grossWPM: number = allTypedEntries / averageWordLength / timePlayed;

    return Math.round(grossWPM);
  };

  return (
    <div>
      <div>{"words typed: " + props.words.length}</div>
      <div>{"WPM: " + calculateWPM()}</div>
      <div>{"time: " + props.finishTime + " seconds"}</div>
      <div>{"mistakes: " + props.incorrectLetters}</div>
      <div>{"accuracy: " + calculateAccuracy() + "%"}</div>
    </div>
  );
};
