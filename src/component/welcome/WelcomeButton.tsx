import * as React from "react";
interface Props {
  setRoomID: (newRoomID: number) => void;
  setIsLoaded: (newIsLoaded: boolean) => void;
  setError: (newError: any) => void;
}

export const WelcomeButton = (props: Props) => {
  const handleEvent = () => {
    fetch("http://localhost:3000/api/rooms", {
      method: "POST",
      mode: "cors"
    })
      .then(response => response.json())
      .then(
        result => {
          props.setRoomID(result.id);
          props.setIsLoaded(true);
        },
        error => {
          props.setIsLoaded(true);
          props.setError(error);
        }
      );
  };

  return (
    <div>
      <button onClick={handleEvent}>Generate lobby</button>
    </div>
  );
};
