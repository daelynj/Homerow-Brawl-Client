import React, { useState, useEffect } from 'react';

function Timer(props) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    var timerID = setTimeout(tick, 1000 );

    return function cleanup () {
      props.finishTime(seconds);
    }
  });

  function tick() {
    setSeconds(seconds + 1);
  }

  return (
    <div>
      Timer: {seconds}
    </div>
  );
}

export default Timer;
