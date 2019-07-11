import * as React from "react";
import { Game } from "./Game";
import Websocket from "react-websocket";
import { useState } from "react";

export const WebsocketController = () => {
  const [socketOpen, setSocketOpen] = useState<boolean>(false);
  const [refWebSocket, setRefWebSocket] = useState<any>();
  const [raceState, setRaceState] = useState<any>(null);
  const [UUID, setUUID] = useState<any>(null);
  const [ID, setID] = useState<any>(null);

  const handleData = (data: any) => {
    let update = JSON.parse(data);

    if (update.hasOwnProperty("uuid")) {
      setUUID(update.uuid);
      setID(update.id);
    } else if (update.hasOwnProperty("players")) {
      setRaceState(update);
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

  const updatePosition = (position: any) => {
    var positionUpdate = {
      uuid: UUID,
      position: position
    };

    sendMessage(positionUpdate);
  };

  const renderGame = () => (
    <Game updatePosition={updatePosition} ID={ID} raceState={raceState} />
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
