import * as React from "react";

export const Welcome = () => {
  const handleEvent = () => {
    //hit API endpoint to get a link
  };

  return (
    <div>
      <button onClick={handleEvent}>Generate lobby</button>
    </div>
  );
};
