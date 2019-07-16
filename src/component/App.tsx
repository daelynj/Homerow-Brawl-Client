import * as React from "react";
import { useState } from "react";
import { WebsocketController } from "./WebsocketController";
import { Welcome } from "./Welcome";

export const App = () => {
  const [path, setPath] = useState<string>(window.location.pathname.slice(1));

  const renderWelcome = () => <Welcome />;
  const renderWebsocketController = () => (
    <WebsocketController socketOpen={false} path={path} />
  );

  const shouldRenderWelcome = () => (path === "" ? true : false);

  return (
    <>
      {console.log(path)}
      <>{shouldRenderWelcome() && renderWelcome()}</>
      <>{!shouldRenderWelcome() && renderWebsocketController()}</>
    </>
  );
};
