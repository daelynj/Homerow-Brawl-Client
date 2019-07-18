import * as React from "react";
import { useState } from "react";
import { WelcomeButton } from "./WelcomeButton";

export const Welcome = () => {
  const [roomID, setRoomID] = useState<any>(-1);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<any>(false);

  return (
    <div>
      {roomID < 0 && (
        <WelcomeButton
          setRoomID={setRoomID}
          setIsLoaded={setIsLoaded}
          setError={setError}
        />
      )}
      {!error && isLoaded && window.location.href + roomID}
      {error && error.message}
    </div>
  );
};
