import * as React from "react";
import { Game } from "../Game";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const updatePosition = jest.fn();

const buildProps = (newProps = {}) => ({
  updatePosition,
  raceState: { players: [{ id: 1, position: 0 }] },
  ID: 1,
  ...newProps
});

describe("Game", () => {
  const GameComponent = mount(<Game {...buildProps()} />);
  const BoardComponent = GameComponent.find("Board");

  it("renders the Board component", () => {
    expect(BoardComponent.exists()).toBe(true);
  });

  it("sets currentWordSubstring as expected", () => {
    expect(BoardComponent.prop("currentWordSubstring")).toBe("");
  });
});
