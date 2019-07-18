import * as React from "react";
import { WebsocketController } from "../WebsocketController";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("WebsocketController", () => {
  it("renders the Websocket component", () => {
    const wrapper = mount(
      <WebsocketController path={"1"} socketOpen={false} />
    );

    expect(wrapper.find("Websocket").length).toEqual(1);
    expect(wrapper.find("Game").length).toEqual(0);
  });

  describe("when the websocket is open", () => {
    it("renders the Game component", () => {
      const wrapper = mount(
        <WebsocketController path={"1"} socketOpen={true} />
      );

      expect(wrapper.find("Websocket").length).toEqual(1);
      expect(wrapper.find("Game").length).toEqual(1);
    });
  });
});
