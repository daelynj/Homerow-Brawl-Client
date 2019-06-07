import React, { useState } from 'react';
import Board from './Board';

function Game() {
  const [start, setStart] = useState(false);
  return (
    <div className="game">
      <div className="board">
        <Board 
          text = "this is text that you are typing in a typing test"
          setStart = {setStart}
          start = {start}
        />
      </div>
    </div>
  )
}

export default Game;
