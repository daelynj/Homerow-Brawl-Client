import * as React from "react";
import { Game } from "../Game";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Game", () => {
  const GameComponent = mount(<Game />);
  const BoardComponent = GameComponent.find("Board");

  it("renders the Board component", () => {
    expect(BoardComponent.exists()).toBe(true);
  });

  it("sets currentWordSubstring as expected", () => {
    expect(BoardComponent.prop("currentWordSubstring")).toBe("");
  });
});
