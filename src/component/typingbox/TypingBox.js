import React from "react";

function TypingBox(props) {
  function handleChange(event) {
    props.setStart(true);
    props.onChange(event.target.value);
  }

  function detectBackspace(event) {
    var code = event.keyCode || event.which;
    if (code !== 8) {
      props.checkLetter();
    }
  }

  function detectSpace(event) {
    var code = event.keyCode || event.which;
    if (code === 32 && checkWord()) {
      event.preventDefault();
    }
  }

  function checkWord() {
    if (props.value === props.word) {
      props.onChange("");
      props.setCurrentWordIndex(props.currentWordIndex + 1);
      return true;
    }
  }

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
}

export default TypingBox;
