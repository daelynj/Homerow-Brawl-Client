import * as React from "react";
import { Game } from "./Game";
import Websocket from "react-websocket";
import { useState } from "react";

interface Props {
  socketOpen: boolean;
}

export const WebsocketController = (props: Props) => {
  const [socketOpen, setSocketOpen] = useState<boolean>(props.socketOpen);
  const [refWebSocket, setRefWebSocket] = useState<any>();
  const [raceState, setRaceState] = useState<any>(null);
  const [ID, setID] = useState<any>(null);
  const [countDown, setCountDown] = useState<boolean>(false);

  const handleData = (data: any) => {
    let update = JSON.parse(data);

    if (update.hasOwnProperty("id")) {
      setID(update.id);
    } else if (update.hasOwnProperty("players")) {
      setRaceState(update);
    } else if (update.hasOwnProperty("countdown")) {
      setCountDown(update.countdown);
    }
  };

  const handleOpen = () => {
    setSocketOpen(true);
  };

  const handleClose = () => {
    setSocketOpen(false);
  };

  const sendMessage = (message: any) => {
    refWebSocket.sendMessage(JSON.stringify(message));
  };

  const updatePosition = (position: number) => {
    var positionUpdate = {
      position: position
    };

    sendMessage(positionUpdate);
  };

  const updateCountDown = (countDown: boolean) => {
    var countDownUpdate = {
      countdown: countDown
    };

    sendMessage(countDownUpdate);
  };

  const renderGame = () => (
    <Game
      countDown={countDown}
      setCountDown={setCountDown}
      updatePosition={updatePosition}
      updateCountDown={updateCountDown}
      ID={ID}
      raceState={raceState}
    />
  );

  return (
    <>
      <Websocket
        url="ws://localhost:3000"
        onMessage={handleData}
        onOpen={handleOpen}
        onClose={handleClose}
        reconnect={false}
        debug={true}
        ref={(Websocket: any) => {
          setRefWebSocket(Websocket);
        }}
      />
      {socketOpen && renderGame()}
    </>
  );
};
