import React from 'react';

function WordsPerMinute(props) {
  const wpm = "WPM: " + Math.round(props.textLength / (props.finishTime / 60))

  return <div className="wpm">{wpm}</div>;
}

export default WordsPerMinute;
