import * as React from "react";

interface Props {
  value: string;
  onChange: (newInput: string) => void;
  checkLetter: () => void;
  word: String;
  setCurrentWordIndex: (newIndex: number) => void;
  currentWordIndex: number;
  countUp: boolean;
}

export const TypingBox = (props: Props) => {
  const handleChange = (event: any) => {
    if (props.countUp === true) {
      props.onChange(event.target.value);
    }
  };

  const detectBackspace = (event: any) => {
    var code = event.keyCode || event.which;
    if (code !== 8) {
      props.checkLetter();
    }
  };

  const detectSpace = (event: any) => {
    var code = event.keyCode || event.which;
    if (code === 32 && checkWord()) {
      event.preventDefault();
    }
  };

  const checkWord = () => {
    if (props.value === props.word) {
      props.onChange("");
      props.setCurrentWordIndex(props.currentWordIndex + 1);
      return true;
    }
  };

  return (
    <div className="TypingBox">
      <input
        type="text"
        value={props.value}
        onKeyUp={detectBackspace}
        onKeyDown={detectSpace}
        onChange={handleChange}
      />
    </div>
  );
};
