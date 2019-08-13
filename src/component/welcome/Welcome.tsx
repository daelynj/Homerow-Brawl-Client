import * as React from "react";
import { useState } from "react";
import { WelcomeButton } from "./WelcomeButton";
import { createRoomAPI } from "./api/createRoomAPI";

export const Welcome = () => {
  const [roomID, setRoomID] = useState<any>(-1);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<any>(false);

  return (
    <>
      {roomID < 0 && (
        <WelcomeButton
          handleEvent={createRoomAPI(setRoomID, setIsLoaded, setError)}
        />
      )}
      {!error && isLoaded && window.location.origin + "/" + roomID}
      {error && error.message}
    </>
  );
};
